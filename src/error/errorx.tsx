import React from 'react'
import {useRouteError} from "react-router-dom";

export default function DefaultError() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div>
            <p className={"font-bold text-4xl"}>Error Page</p>
            <p className={"text-center mt-5 text-xl font-bold"}>{error?.status} {error?.statusText || error?.status}</p>
        </div>
    )
}