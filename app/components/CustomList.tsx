"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

interface Props {
  IList: any[];
}

const CustomList = ({ IList }: Props) => {
  const [CList, setList]: any = useState(IList);
  const [newName, setNewName] = useState("");

  function AddName() {
    if (newName != "") {
      let newList = CList;
      let newItem = JSON.parse(JSON.stringify(CList[0]));
      newItem.name = newName;
      newItem.id = newList.length + 1;
      setNewName("");
      setList(newList.concat(newItem));
    }
  }
  function RemoveName(id: number) {
    if (CList.length > 1) {
      let newList = CList;
      setList(newList.filter((user: any) => user.id !== id));
    }
  }
  let elementList = (
    <>
      <List>
        {CList.sort(function (a: any, b: any) {
          if (a["name"].toUpperCase() < b["name"].toUpperCase()) return -1;
          if (a["name"].toUpperCase() > b["name"].toUpperCase()) return 1;
          return 0;
        }).map((user: any) => (
          <ListItem key={user["id"] + user["name"] + user["id"]} disablePadding>
            <ListItemButton
              onClick={() => RemoveName(user.id)}
              key={user["id"] + user["name"]}
            >
              <ListItemText key={user["id"]} primary={user["name"]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  // useEffect(() => {}, []);

  return (
    <div className="ml-10 ">
      {CList.length == 0 ? (
        <>
          <Alert severity="warning">The list is empty</Alert>
        </>
      ) : (
        ""
      )}
      <div className="flex items-left">
        <TextField
          className="h-9 w-15"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          color="primary"
          label="ingrese un nuevo nombre"
          sx={{ input: { color: "white" } }}
          focused
        ></TextField>
        <Button
          className="bg-blue-800 h-15 w-15 ml-3 mt-2"
          variant="contained"
          onClick={() => AddName()}
        >
          Add
        </Button>
      </div>
      <div className="ml-1 mt-10">{elementList}</div>
    </div>
  );
};

export default CustomList;
