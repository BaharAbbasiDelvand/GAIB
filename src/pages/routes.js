import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import MainPage from "./main/Main";
import Register from "./register/Register"
import Stats from "./stats/Stats"
import LandingPage from "./landingpage/Landing";



export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <LandingPage /> },
  { path: "/register", element: <Register /> },
  { path: "/stats", element: <Stats /> },
  { path: "/main/:user_id", element: <MainPage /> },
]);
