import React from 'react'
import {Form, Link} from "react-router-dom";
import {styled} from "styled-components";

const MenuWrapper = styled.div`
  padding: 12px;
  
  a {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    border-radius: 5px;
  }

  a:hover {
    background: rgb(203 213 225);
  }
  
  a:not(:last-child) {
    margin-bottom: 5px;
  }

`;

export default function LeftMenu() {
    return (
        <MenuWrapper className={"w-[20vw] bg-slate-200 h-[95vh] flex flex-col items-center"}>
            <Form action={"/"} method={"post"}>
                <button type={"submit"}>create</button>
            </Form>
            <Link to={`/`}>Home</Link>
            <Link to={`/sample/1`}>Sample1</Link>
            <Link to={`/sample/2`}>Sample2</Link>
            <Link to={`/another/1`}>Another Page</Link>
        </MenuWrapper>
    )
}