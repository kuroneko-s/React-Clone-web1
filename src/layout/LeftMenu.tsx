import React from 'react'
import {Link} from "react-router-dom";

export default function LeftMenu() {
    return (
        <div className={"w-[20vw] bg-slate-200 h-[95vh] flex flex-col items-center"}>
            <Link to={`/`}>Home</Link>
            <Link to={`/sample/1`}>Sample1</Link>
            <Link to={`/sample/2`}>Sample2</Link>
            <Link to={`/another/1`}>Another Page</Link>
        </div>
    )
}