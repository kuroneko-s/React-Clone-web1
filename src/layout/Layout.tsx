import React from 'react'
import {styled} from "styled-components";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import {ErrorBoundary} from "react-error-boundary";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentsContainer = styled.div`
  display: flex;
`;

export default function Layout({children}: any) {
    console.log(children)
    return (
        <MainContainer className={""}>
            <Header/>
            <ContentsContainer>
                <LeftMenu/>
                <ErrorBoundary
                    fallback={<div>wrong</div>}
                    onReset={(details) => {
                        console.log(details);
                    }}
                >
                </ErrorBoundary>
                <main className={"flex items-center justify-center w-[80vw] h-[95vh]"}>{children}</main>
            </ContentsContainer>
        </MainContainer>
    )
}