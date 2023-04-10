import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => {
  return () => {
    const isAuth = localStorage.getItem("auth") === "token";
    const onLogin = () => {
      localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
      localStorage.removeItem("auth");
    };
    return <CardWrapper><Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} /></CardWrapper>;
  };
};

export default withFunctions;
