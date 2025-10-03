import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
 return (
    <>
        <header className={styles.navbar}>
            <div className={styles.logo}>ГГВП</div>
            <NavLink to={'/'}>План</NavLink>
            <NavLink to={'/registration'}>Регистрация</NavLink>
            <div className={styles.navbar__auth}>User</div>
        </header>
    </>
 )
}

export default Navbar