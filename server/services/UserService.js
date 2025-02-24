import UserModel from "../models/UserModel.js";

import { ResFormatter } from "../utils/ResFormatter.js";
import { throwApiError } from "../utils/throwApiError.js";
import { throwHandleError } from "../utils/throwHandleError.js";
import MailerService from "./NodemailerService.js";
import { TokenService } from "./TokenService.js";
import bcrypt from "bcryptjs";

class UserServiceClass {
  async register({ username, email, password, userAgent, ip }) {
    try {
      const existingUser = await UserModel.findOne({
        $or: [{ email }, { username }],
      });

      if (existingUser) {
        throwApiError(
          409,
          "Conflict while registering user",
          "Користувач з таким email або username вже існує"
        );
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        isVerified: false,
        verifyUrl: Date.now().toString(36),
        googleId: Date.now().toString(36) + Math.random() * 1000,
      });
      await newUser.save();

      const refreshToken = await TokenService.createRefreshToken(newUser);
      const accessToken = await TokenService.createAccessToken(newUser);

      TokenService.saveToken(newUser._id, refreshToken, userAgent, ip);

      const code = await MailerService.sendVerificationEmail(email);
      newUser.verifyUrl = code;
      await newUser.save();
      return ResFormatter.resForm(
        { user: newUser, accessToken, refreshToken },
        "Користувач успішно зареєстрований"
      );
    } catch (error) {
      throwHandleError(error, "Internal Server Error while registering user");
    }
  }

  async login({ email, password, userAgent, ip }) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throwApiError(
          401,
          "Unauthorized",
          "Користувача з таким email не знайдено"
        );
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throwApiError(401, "Unauthorized", "Невірний пароль");
      }

      const refreshToken = await TokenService.createRefreshToken(user);
      const accessToken = await TokenService.createAccessToken(user);
      await TokenService.saveToken(user._id, refreshToken, userAgent, ip);
      return ResFormatter.resForm(
        { user, accessToken, refreshToken },
        "Користувач успішно авторизований"
      );
    } catch (error) {
      throwHandleError(error, "Internal Server Error while registering user");
    }
  }

  async logout({ refreshToken }) {
    try {
      await TokenService.removeToken(refreshToken);
      return ResFormatter.resForm({}, "Користувач успішно вийшов з системи");
    } catch (error) {
      throwHandleError(error, "Internal Server Error while registering user");
    }
  }

  async activation({ code }) {
    try {
      const user = await UserModel.findOne({ verifyUrl: code });
      if (!user) {
        throwApiError(401, "Unauthorized", "Активаційна силка не дійсна");
      }
      if (user.isVerified) {
        throwApiError(401, "Unauthorized", "Акаунт вже верифіковано");
      }
      user.isVerified = true;
      await user.save();
    } catch (error) {
      throwHandleError(error, "Internal Server Error while registering user");
    }
  }
}

export const UserService = new UserServiceClass();
