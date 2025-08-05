import { Outlet } from "react-router";
import { Header } from "../core-components/Header";
import { MainContent } from "../core-components/MainContent";


export function LayoutMain(){
    return(
        <>
            <Header/>
            <MainContent>
                <Outlet/>
            </MainContent>
        </>
    )
}