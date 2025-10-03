import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer>2025</footer>
        </>
    )
}

export default Layout
