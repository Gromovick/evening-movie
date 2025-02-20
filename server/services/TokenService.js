import TokenModel from "../models/TokenModel.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
class TokenServiceClass {
  async createRefreshToken(user) {
    try {
      const refreshToken = await jwt.sign(
        { user: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
      );
      return refreshToken;
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while creating refresh token"
      );
    }
  }

  async createAccessToken(user) {
    try {
      const accessToken = await jwt.sign(
        { user: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      return accessToken;
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while creating access token"
      );
    }
  }

  async verifyToken(token, secret) {
    try {
      return await jwt.verify(token, secret);
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while verifying token"
      );
    }
  }

  async saveToken(userId, refreshToken, userAgent, ip) {
    try {
      const token = new TokenModel({
        userId,
        token: refreshToken,
        device: userAgent,
        ip,
      });
      await token.save();
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while saving token"
      );
    }
  }

  async removeToken(token) {
    try {
      await TokenModel.deleteOne({ token });
    } catch (error) {
      throw new ApiError(
        500,
        error.message,
        "Internal Server Error while removing token"
      );
    }
  }
}

export const TokenService = new TokenServiceClass();
