import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import ErrorPage from "../pages/error/error";
import Sidebar from "../components/sidebar/Sidebar";
import Study from "../pages/study/study";
import User from "../pages/user/user";
import Chat from "../pages/chat/chat";
import Setting from "../pages/setting/setting";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
         {
            element: <Home />,
            index: true,
         },
         {
            element: <Study />,
            path: "/study",
         },
         {
            element: <User />,
            path: "/user",
         },
         {
            element: <Chat />,
            path: "/chat",
         },
         {
            element: <Setting />,
            path: "/setting",
         }
      ]
   },
   {
      path: "/login",
      element: <Login />,
   }
])