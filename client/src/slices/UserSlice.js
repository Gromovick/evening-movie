import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../http/axios";
import { UserService } from "../services/UserService";

const initialState = {
  user: null,
  message: "",
  isLoading: false,
  isAuthenticated: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logout: () => {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.result.user;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
      });
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.result.user;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
      });
    builder
      .addCase(authentication.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(authentication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message || "Success";
      })
      .addCase(authentication.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
      });
  },
});

export const { setUser, setMessage, setIsLoading, logout } = UserSlice.actions;
export default UserSlice.reducer;

export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const { email, password } = data;
      const response = await http.post("/auth/login", { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message:
          error.response?.data?.message || "An error occurred during login",
      });
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const { email, password, username } = data;
      const response = await http.post("/auth/register", {
        email,
        password,
        username,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue({
        message:
          error.response?.data?.message || "An error occurred during login",
      });
    }
  }
);
export const authentication = createAsyncThunk(
  "user/authentication",
  async (_, { rejectWithValue }) => {
    try {
      const data = await UserService.authentication();
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue({
        message:
          error.response?.data?.message ||
          "An error occurred during auto login",
      });
    }
  }
);
