"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button } from "@mui/material";
import { setAuthState } from "../store/authSlice";
import { useAppDispatch } from "../store/store";
import { useAppSelector } from "../store/store";

const LoginComponent = () => {
  const [userName, setNewName] = useState("");
  const [userPassword, setNewPassword] = useState("");
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth);

  function LoginButton() {
    if (userName != "" && userPassword != "") {
      dispatch(setAuthState({ user: userName, password: userPassword }));
      setNewName("");
    }
  }
  function LogOutButton() {
    dispatch(setAuthState({ user: "", password: "" }));
  }
  return (
    <>
      {authUser.user == "" ? (
        <div className="flex items-left">
          <TextField
            className="h-9 w-15"
            type="text"
            value={userName}
            onChange={(e) => setNewName(e.target.value)}
            color="primary"
            label="ingrese su usuario"
            sx={{ input: { color: "white" } }}
            focused
          ></TextField>
          <TextField
            className="h-9 w-15"
            type="password"
            value={userPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            color="primary"
            label="ingrese su contraseña"
            sx={{ input: { color: "white" } }}
            focused
          ></TextField>
          <Button
            className="bg-blue-800 h-15 w-15 ml-3 mt-2"
            variant="contained"
            onClick={() => LoginButton()}
          >
            Log in
          </Button>
        </div>
      ) : (
        <div className="flex items-left">
          Hi! {authUser.user}, you are logged in the app
          <Button
            className="bg-blue-800 h-15 w-15 ml-3 mt-2"
            variant="contained"
            onClick={() => LogOutButton()}
          >
            Log out
          </Button>
        </div>
      )}
    </>
  );
};

export default LoginComponent;
