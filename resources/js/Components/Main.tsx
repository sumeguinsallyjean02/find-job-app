import React from "react";
import {
    Routes,
    Route,
    HashRouter as Router
} from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { JobApproval } from "./Jobs/JobApproval";
import { AddJob } from "./Jobs/AddJob";
import { JobDetails } from "./Jobs/JobDetails";
import { JobLists } from "./Jobs/JobLists";
import { AvailableJobs } from "./Jobs/AvailableJobs";

export default function Main() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" Component={AvailableJobs}></Route>
                    <Route path="/home" Component={Home}></Route>
                    <Route path="/job/create" Component={AddJob}></Route>
                    <Route path="job/:id/confirm" Component={JobApproval}></Route>
                    <Route path="/login" Component={Login}></Route>
                    <Route path="/job/detail/:id" Component={JobDetails}></Route>
                </Routes>
            </div>
        </Router>
    )
}