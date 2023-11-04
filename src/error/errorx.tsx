import React from 'react'
import {useRouteError} from "react-router-dom";

export default function DefaultError() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div>
            <p>Error Page</p>
            <p>
                <i>{error?.status || error?.statusText}</i>
            </p>
        </div>
    )
}