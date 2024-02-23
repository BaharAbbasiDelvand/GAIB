import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import MainPage from "./main/Main";
import Register from "./register/Register"
export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <MainPage /> },
  { path: "/register", element: <Register /> },
]);
