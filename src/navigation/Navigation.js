import React from "react";
import { Footer, Header } from "../components";
import {
    BrowserRouter as Router,

    Route,
    Routes,

} from "react-router-dom";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import Error from "../pages/Error";
import About from "../pages/About";


export default function Navigation() {
    return (
        <Router>
            <div>
                <Header />



                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Error />} />


                </Routes >
                <Footer />
            </div>
        </Router >
    );
}

