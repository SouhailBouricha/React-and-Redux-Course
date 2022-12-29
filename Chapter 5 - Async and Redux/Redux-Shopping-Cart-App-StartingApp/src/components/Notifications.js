import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
const Notifications = ({type, message}) => {

  return (
    <div>
      <Alert severity={type}>{message}</Alert>
    </div>
  );
};

export default Notifications;
