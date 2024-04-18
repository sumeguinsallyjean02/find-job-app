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
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/job-seeker">Job Seeker</Link>
                        </li>
                        <li>
                            <Link to="/job-employer">Job Emplooyer</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </nav> */}

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