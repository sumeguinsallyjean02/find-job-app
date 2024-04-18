import React from "react";
import {
    Routes,
    Route,
    HashRouter as Router
} from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { JobDetails } from "./JobDetails";

export default function Main() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/home" Component={Home}></Route>
                    <Route path="job/{id}/confirm" Component={JobDetails}></Route>
                    <Route path="/login" Component={Login}></Route>
                </Routes>
            </div>
        </Router>
    )
}