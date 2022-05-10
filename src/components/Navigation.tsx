import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <NavLink
        className={({ isActive }) => {
          if (isActive) {
            return "p-2 text-0";
          } else {
            return "p-2 text-300";
          }
        }}
        style={{
          textDecoration: "none",
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          if (isActive) {
            return "p-2 text-0";
          } else {
            return "p-2 text-300";
          }
        }}
        style={{
          textDecoration: "none",
        }}
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          if (isActive) {
            return "p-2 text-0";
          } else {
            return "p-2 text-300";
          }
        }}
        style={{
          textDecoration: "none",
        }}
        to="/favorites"
      >
        Favorites
      </NavLink>
    </div>
  );
}

export { Navigation };
