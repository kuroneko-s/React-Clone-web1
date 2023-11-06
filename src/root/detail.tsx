import React from 'react';
import {getContact} from "../data/sample";
import {useLoaderData} from "react-router-dom";

export async function loader({params} : any) {
    const contact = await getContact(params.detailId);
    console.log("loader detail - ", contact);
    return {contact};
}

export default function RootDetail() {
    const loaderData = useLoaderData();
    console.log(loaderData)
    return (
        <div>
            Hello Sample Page
        </div>
    )
}