import React from "react";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "../views/Favorites";
import { Home } from "../views/Home";
import { Search } from "../views/Search";

function AppRouter() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
  ];
  return (
    <Routes>
      {routes.map((x, index) => (
        <Route path={x.path} element={x.element} key={index} />
      ))}
    </Routes>
  );
}

export { AppRouter };
