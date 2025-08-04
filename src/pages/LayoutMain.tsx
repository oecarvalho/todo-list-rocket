import { NavLink, Outlet } from "react-router";
import { Header } from "../core-components/Header";
import { MainContent } from "../core-components/MainContent";
import { Footer } from "../core-components/Footer";

export function LayoutMain(){
    return(
        <>
            <Header/>
            <MainContent>
                <Outlet/>
            </MainContent>
            <Footer/>
        </>
    )
}