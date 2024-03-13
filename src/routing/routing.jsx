import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import ErrorPage from "../pages/error/error";
import Sidebar from "../components/sidebar/Sidebar";

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
            path: "/login",
            element: <Login />,

         }
      ]
   },
   // {
   //    path: "/login",
   //    element: <Login />,
   // }
])