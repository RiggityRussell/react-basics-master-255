import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {About} from "./about"
import {Link} from "react-router-dom";

function App(){
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
            <Routes>
                <Route path="/" element={<h1>Home, brought to you by routes</h1>}/>
                    
                <Route path="/about" element={<About />}/>
            </Routes>
    </>;

}

export default App;