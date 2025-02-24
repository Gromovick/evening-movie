import { UserService } from "../services/UserService.js";
import { ApiError } from "../utils/ApiError.js";
import { handleError } from "../utils/handleError.js";
import { ResFormatter } from "../utils/ResFormatter.js";
import { throwApiError } from "../utils/throwApiError.js";

class UserControllerClass {
  async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const userAgent = req.headers["user-agent"];
      const ip = req.ip;
      if (!username || !email || !password) {
        throwApiError(400, "Bad Request", "Please provide all fields");
      }

      const data = await UserService.register({
        username,
        email,
        password,
        userAgent,
        ip,
      });
      res.cookie("refreshToken", data.result.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.cookie("accessToken", data.result.accessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
      });
      ResFormatter.resAnswer(res, 200, data);
    } catch (error) {
      next(handleError(error, ""));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throwApiError(400, "Bad Request", "Please provide all fields");
      }

      const userAgent = req.headers["user-agent"];
      const ip = req.ip;

      const data = await UserService.login({ email, password, userAgent, ip });
      res.cookie("refreshToken", data.result.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.cookie("accessToken", data.result.accessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
      });
      ResFormatter.resAnswer(res, 200, data);
    } catch (error) {
      next(handleError(error, ""));
    }
  }

  async logout(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const data = await UserService.logout({ refreshToken });
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");
      ResFormatter.resAnswer(res, 200, data);
    } catch (error) {
      next(handleError(error, ""));
    }
  }

  async activation(req, res, next) {
    try {
      const { code } = req.params;
      const data = await UserService.activation({ code });
      res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      res.redirect(process.env.CLIENT_URL);
    }
  }
}

export const UserController = new UserControllerClass();
