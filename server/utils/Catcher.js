import { handleError } from "./handleError.js";
import { throwHandleError } from "./throwHandleError.js";

export class Catcher {
  constructor() {}
  static async Controller(callback, next) {
    try {
      await callback();
    } catch (error) {
      next(handleError(error, ""));
    }
  }
  static async Service(callback) {
    try {
      return await callback();
    } catch (error) {
      throwHandleError(error, "Internal Server Error while registering user");
    }
  }
}
