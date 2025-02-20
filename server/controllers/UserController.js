import { UserService } from "../services/UserService.js";
import { ApiError } from "../utils/ApiError.js";
import { ResFormatter } from "../utils/ResFormatter.js";

class UserControllerClass {
  async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const userAgent = req.headers["user-agent"];
      const ip = req.ip;
      if (!username || !email || !password) {
        throw new ApiError(400, "Please provide all fields", "Bad Request");
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
      });
      res.cookie("accessToken", data.result.accessToken, {
        httpOnly: true,
      });
      ResFormatter.resAnswer(res, 200, data);
    } catch (error) {
      next(new ApiError(500, error.message, "Internal Server Error"));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new ApiError(400, "Please provide all fields", "Bad Request");
      }

      const userAgent = req.headers["user-agent"];
      const ip = req.ip;

      const data = await UserService.login({ email, password, userAgent, ip });
      res.cookie("refreshToken", data.result.refreshToken, {
        httpOnly: true,
      });
      res.cookie("accessToken", data.result.accessToken, {
        httpOnly: true,
      });
      ResFormatter.resAnswer(res, 200, data);
    } catch (error) {
      next(new ApiError(500, error.message, "Internal Server Error"));
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
      next(new ApiError(500, error.message, "Internal Server Error"));
    }
  }
}

export const UserController = new UserControllerClass();
