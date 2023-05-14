import {FC} from "react";
import {AuthPage} from "./pages/auth";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "login",
    Component: AuthPage
  },
  {
    path: "register",
    Component: AuthPage
  }

])

export const App: FC = () => {
  return <RouterProvider router={router}/>;
};
