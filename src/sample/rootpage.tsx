import React from 'react'
import {Outlet} from "react-router-dom";


export default function RootPage() {
    return (
        <div id={"detail"}>
            <p>Root Page</p>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}