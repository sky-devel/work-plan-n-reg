import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.js"

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
