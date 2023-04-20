import React from "react";
import Cookies from "js-cookie";
import Login from "../Login";

export default function PrivateRouter({ children }) {
  const token = Cookies.get("token");
  if (!token) {
    return <Login />;
  }
  return children;
}
