import { createSlice } from "@reduxjs/toolkit";
import { signUp, login } from "./authThunk";
import status from "../constants/commonDS";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signUpUser: {
      status: null,
    },
    loggedInUser: {
      status: null,
    },
  },
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state, action) => {
      return {
        ...state,
        signUpUser: {
          status: status.IN_PROGRESS,
        },
      };
    },
    [signUp.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        signUpUser: {
          status: status.SUCCESS,
          data: payload,
        },
      };
    },
    [signUp.rejected]: (state, { payload }) => {
      return {
        ...state,
        signUpUser: {
          status: status.FAILURE,
        },
      };
    },
    [login.pending]: (state, action) => {
      return {
        ...state,
        loggedInUser: {
          status: status.IN_PROGRESS,
        },
      };
    },
    [login.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loggedInUser: {
          status: status.SUCCESS,
          data: payload,
        },
      };
    },
    [login.rejected]: (state, { payload }) => {
      return {
        ...state,
        loggedInUser: {
          status: status.FAILURE,
        },
      };
    },
  },
});

export default authSlice.reducer;
