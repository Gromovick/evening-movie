import { ApiError } from "./ApiError.js";

export function handleError(error, defaultMessage) {
  return new ApiError(
    error.status ?? 500,
    error.message,
    error.myMessage ?? defaultMessage
  );
}
