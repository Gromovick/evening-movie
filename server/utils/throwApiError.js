import { ApiError } from "./ApiError.js";

export function throwApiError(status, message, myMessage) {
  throw new ApiError(status, message, myMessage);
}
