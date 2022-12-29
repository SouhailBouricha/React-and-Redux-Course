import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { uiAction } from "../store/ui-slicer";

const Notifications = ({type, message}) => {
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  const handelClose  = () =>{
    dispatch(uiAction.showNotif({ open : false }));
  }
  return (
    <div>
      {
        notification.open && 
      <Alert severity={type} onClose={handelClose}>{message}</Alert>
      }
    </div>
  );
};

export default Notifications;
