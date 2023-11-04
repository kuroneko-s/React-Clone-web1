import React from 'react'
import {Outlet} from "react-router-dom";
import LeftMenu from "../layout/LeftMenu";


export default function RootPage() {
    return (
        <div id={"detail"}>
            <LeftMenu/>

            <p>Root Page</p>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}