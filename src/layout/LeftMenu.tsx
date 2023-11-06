import React from 'react'
import {Form, Link, useLoaderData} from "react-router-dom";
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

interface LoaderDataI {
    id: string;
    createdAt: any;
}

export default function LeftMenu() {
    const {contacts}: any = useLoaderData();

    return (
        <MenuWrapper className={"w-[20vw] bg-slate-200 h-[95vh] flex flex-col items-center"}>
            <Form method={"post"}>
                <button type={"submit"}>create</button>
            </Form>
            {contacts.map((contact: LoaderDataI) => {
                return <Link key={`${contact.id}`} to={`/${contact.id}`}>${contact.id}</Link>
            })}
            <Link to={`/`}>Home</Link>
        </MenuWrapper>
    )
}