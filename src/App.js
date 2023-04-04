// https://react.dev
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { page_routes } from "./page_routes";
import "./style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {page_routes.map((page) => (
          <Route path={page.path} element={<page.element />} key={page.id} />
        ))}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
