// https://react.dev
import Button from '@mui/material/Button';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Card.js';
import NavBar from './components/navbar';
import { page_routes } from "./static/page_routes";

function App() {
        return (
                < div className="App" >
                        <NavBar />
                        <Routes>
                                {page_routes.map((page) =>
                                        <Route path={page.path} element={<page.element />} key={page.id} />
                                )}
                        </Routes>
                        <div className="container">
                                <Card />
                                <Card />
                                <Button variant="contained">Hello World</Button>
                        </div>
                </div >
        );
}

export default App;
