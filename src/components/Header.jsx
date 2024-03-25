import { Link, NavLink } from "react-router-dom"
import logo from "../assets/img/logo.jpeg"
import '../styles/Header.css'

function Header(){
    return(
        <header>
            <Link to="/">
                <img src={logo} alt="Mon logo" />
            </Link>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/meteo">Météo</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header