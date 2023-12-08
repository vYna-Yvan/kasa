import {
    Link
} from "react-router-dom";
import React from 'react'
import './style.css'
const Header = () => {
    return (
        <header className='header-container' >
            <nav>
                <ul className="listNav">
                    <li>
                        <Link to="/">Home</Link>
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