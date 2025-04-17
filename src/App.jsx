import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Contery } from "./pages/Contery";
import { Error } from "./pages/Error";
import { ConteryDetalies } from "./components/Layout/ConteryDetalies";


export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/country",
          element: <Contery/>, // Fixed incorrect component name
        },
        {
          path: "/country/:id",
          element: <ConteryDetalies/>, // Fixed incorrect component name
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
