import {
    Link
} from "react-router-dom";
import React from 'react'
import './style.css'
import logo from '../header/logo/.LOGO.svg'; // with import
// with import
const Header = () => {
    return (
        <header className='header-container' >
            <img src={logo} alt='kasa'></img>

            <nav>
                <ul className="listNav">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>

                    <li>
                        <Link to="/about">A propos</Link>
                    </li>

                </ul>
            </nav></header>
    )
}
/**
 *  <li>
                        <Link to="/logement">Logement</Link>
                    </li>
 */
export default Header