import React from "react";
import {
    Routes,
    Route,
    Link,
    HashRouter as Router
} from "react-router-dom";
import { Login } from "./Login";
import { Admin } from "./Admin";

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
                </Routes>
            </div>
        </Router>
    )
}