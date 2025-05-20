import http from "../http/axios";

class UserServiceClass {
  constructor() {}

  async authentication() {
    const response = await http.get("/auth/authentication");
    return response.data;
  }
}

export const UserService = new UserServiceClass();
