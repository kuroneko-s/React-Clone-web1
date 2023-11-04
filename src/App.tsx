import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Sample from "./sample";
import DefaultError from "./error/errorx";
import Layout from "./layout/Layout";
import RootPage from "./sample/rootpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <DefaultError />,
        children: [
            {
                path: "sample/:sampleId",
                element: <Sample />
            }
        ]
    },

])

function App() {
    return (
        <Layout>
            <RouterProvider router={router}/>
        </Layout>
    );
}

export default App;
