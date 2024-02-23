"use client";

import React from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../store/store";

const NavBar = () => {
  const { push } = useRouter();
  const authUser = useAppSelector((state) => state.auth);
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <List className="grid grid-flow-row-dense grid-cols-4 grid-rows-4">
        <ListItem className="col-span-1">
          <ListItemButton onClick={() => push("/")}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => push("/login")}>
            {authUser.user == "" ? (
              <ListItemText>Login</ListItemText>
            ) : (
              <ListItemText>Log out</ListItemText>
            )}
          </ListItemButton>
        </ListItem>
        <ListItem>
          {authUser.user == "" ? (
            <ListItemText>No one</ListItemText>
          ) : (
            <ListItemText>{authUser.user}</ListItemText>
          )}
        </ListItem>
        {authUser.user != "" ? (
          <ListItem className="col-span-1">
            <ListItemButton onClick={() => push("/profile")}>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </ListItem>
        ) : (
          <></>
        )}
      </List>
    </div>
  );
};

export default NavBar;
