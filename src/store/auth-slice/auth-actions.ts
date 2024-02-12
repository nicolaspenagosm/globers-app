import { Dispatch } from "@reduxjs/toolkit";
import { Login } from "../../types/shared";

export const signUp = (params: Login) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATHPJbhlSitsqunx5BXChCiG5wElKD6_Q",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    if (!response.ok) {
      // throw new Error("Signup failed");
    }

    const data = await response.json();
    // dispatch setToken
    // getUser
    console.log("User signed up successfully:", data);
  };
};
