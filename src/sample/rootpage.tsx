import React from 'react'
import {Outlet, useLoaderData} from "react-router-dom";
import {createContact} from "../data/sample";

export async function action() {
    const result = await createContact();
    console.log("run - ", result);
    return result
}

export default function RootPage() {
    const data = useLoaderData();
    console.log(data);

    return (
        <div id={"detail"}>
            <p>Root Page</p>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}