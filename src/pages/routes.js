import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import MainPage from "./main/Main";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <MainPage /> }
]);
