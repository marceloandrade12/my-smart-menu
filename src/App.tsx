import { Layout } from "@components";
import { DishSelection, Home, MenuSelection, Result } from "@screens";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const routes = ["/", "/menuSelection", "/dishSelection", "/result"];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: routes[0],
        element: <Home />,
      },
      {
        path: routes[1],
        element: <MenuSelection />,
      },
      {
        path: routes[2],
        element: <DishSelection />,
      },
      {
        path: routes[3],
        element: <Result />,
      },
    ],
    errorElement: <>Wrong Way!</>,
  },
]);

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};
