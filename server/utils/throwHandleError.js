import { ApiError } from "./ApiError.js";

export function throwHandleError(error, defaultMessage) {
  throw new ApiError(
    error.status ?? 500,
    error.message,
    error.myMessage ?? defaultMessage
  );
}
