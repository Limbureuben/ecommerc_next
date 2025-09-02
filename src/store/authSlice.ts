import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  role: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  role: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string; role: string }>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
