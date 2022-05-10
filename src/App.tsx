import React from "react";
import "./App.css";
import { MovieDetailsDialog } from "./components/MovieDetails/MovieDetailsDialog";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <AppRouter />
        <MovieDetailsDialog />
        <Footer />
      </main>
    </>
  );
}

export { App };
