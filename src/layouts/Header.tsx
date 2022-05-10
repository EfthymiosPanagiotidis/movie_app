import React from "react";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";

function Header() {
  return (
    <header className="flex flex-row justify-content-around p-5 bg-primary">
      <Logo />
      <Navigation />
    </header>
  );
}

export { Header };
