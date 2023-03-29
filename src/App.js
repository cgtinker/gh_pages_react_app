// https://react.dev
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import { page_routes } from "./static/page_routes";
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
                </div>
        );
}

export default App;
