import React from "react";
import { Header } from "../Header";
import { Menu } from "../Navigation";


export const Admin = () => {

    const menu : String[] = [
        'Jobs'
    ]
    return (
        <div>
            <Menu
                menu={menu}
            ></Menu>
        </div>
    )
}