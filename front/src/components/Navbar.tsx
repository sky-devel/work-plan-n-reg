import { NavLink } from "react-router-dom"

const Navbar = () => {
 return (
    <>
        <header className="navbar">
            <div className="logo">ГГВП</div>
            <NavLink to={'/'}>План</NavLink>
            <NavLink to={'/registration'}>Регистрация</NavLink>
            <div className="auth">User</div>
        </header>
    </>
 )
}

export default Navbar