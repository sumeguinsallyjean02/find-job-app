import React from "react";
import {
    Routes,
    Route,
    Link,
    HashRouter as Router
} from "react-router-dom";
import { Login } from "./Login";
import { Admin } from "./Admin";
import { Employer } from "./Employer";
import { JobSeeker } from "./JobSeeker";

export default function Main() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/admin" Component={Admin}></Route>
                    <Route path="/login" Component={Login}></Route>
                    <Route path="/employeer" Component={Employer}></Route>
                    <Route path="/job-seeker" Component={JobSeeker}></Route>

                </Routes>
            </div>
        </Router>
    )
}