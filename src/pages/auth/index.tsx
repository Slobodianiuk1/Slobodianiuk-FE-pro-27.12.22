import {FC} from "react";
import {LoginPage} from "./login";
import {useLocation} from "react-router-dom";
import {RegisterPage} from "./register";

export const AuthPage:FC = () => {
  const location = useLocation()

  return (
    <div>
      {
        location.pathname === '/login' ? (
          <LoginPage/>
        ) : location.pathname === '/register' ? (
          <RegisterPage/>
        ) : null
      }
    </div>
  );
};
