import React from 'react'
import {Outlet} from "react-router-dom";
import {createContact, getContacts} from "../data/sample";

export async function action() {
    const result = await createContact();
    console.log("root Action - ", result);
    return result
}

export async function loader() {
    const contacts = await getContacts();
    console.log("root Loader - ", contacts);
    return {contacts};
}

export default function RootIndex() {
    return (
        <div id={"detail"}>
            <p>Root Page</p>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}