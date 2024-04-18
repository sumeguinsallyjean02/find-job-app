import React from "react";
import { Header } from "../Header";
import { Menu } from "../Navigation";


export const Employer = () => {
    const menu : String[] = [
        'Jobs',
        'Create Job'
    ]

    return (
        <div>
            <Menu menu={menu}></Menu>
        </div>
    )
}