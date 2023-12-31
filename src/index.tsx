import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from "styled-components";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootIndex, {action as rootAction, loader as rootLoader} from "./root";
import DefaultError from "./error/errorx";
import RootDetail, {loader as detailLoader} from "./root/detail";
import Layout from "./layout/Layout";
import AnotherPage from "./another";
import RootEdit from "./root/edit";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <RootIndex/>
            </Layout>
        ),
        errorElement: (
            <Layout>
                <DefaultError/>
            </Layout>
        ),
        loader: rootLoader, // get 호출시 동작.
        action: rootAction,
        children: [
            {
                path: ":detailId",
                element: (
                    <RootDetail/>
                ),
                loader: detailLoader
            },
        ]
    },
    {
        path: "edit",
        element: (
            <Layout>
                <RootEdit />
            </Layout>
        )
    },
    {
        path: "/another/:id",
        element: (
            <Layout>
                <AnotherPage/>
            </Layout>
        ),
    }
])

root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);