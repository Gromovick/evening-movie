import UserModel from "../models/UserModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ResFormatter } from "../utils/ResFormatter.js";
import { TokenService } from "./TokenService.js";
import bcrypt from "bcryptjs";

class UserServiceClass {
  async register({ username, email, password, userAgent, ip }) {
    try {
      const existingUser = await UserModel.findOne({
        $or: [{ email }, { username }],
      });

      if (existingUser) {
        throw new ApiError(
          409,
          "Користувач з таким email або username вже існує",
          "Conflict while registering user"
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

      return ResFormatter.resForm(
        { user: newUser, accessToken, refreshToken },
        "Користувач успішно зареєстрований"
      );
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while registering user"
      );
    }
  }

  async login({ email, password, userAgent, ip }) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new ApiError(
          401,
          "Користувача з таким email не знайдено",
          "Unauthorized"
        );
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new ApiError(401, "Невірний пароль", "Unauthorized");
      }

      const refreshToken = await TokenService.createRefreshToken(user);
      const accessToken = await TokenService.createAccessToken(user);
      await TokenService.saveToken(user._id, refreshToken, userAgent, ip);
      return ResFormatter.resForm(
        { user, accessToken, refreshToken },
        "Користувач успішно авторизований"
      );
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while logging in user"
      );
    }
  }

  async logout({ refreshToken }) {
    try {
      await TokenService.removeToken(refreshToken);
      return ResFormatter.resForm({}, "Користувач успішно вийшов з системи");
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while logging out user"
      );
    }
  }
}

export const UserService = new UserServiceClass();
