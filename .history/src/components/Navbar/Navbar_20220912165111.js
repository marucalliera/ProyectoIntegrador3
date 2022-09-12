import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar (props) {
    return (
        <nav>
            <ul className="main-nav">
                <li>
                   <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/populares'>Populares</Link>
                </li>
                <li>
                    <Link to='/cartelera'>Cartelera</Link>
                </li>
                <li>
                    <Link to='/favoritos'>Favoritos</Link>
                </li>

            </ul>
        </nav>
    )
    
    
}


export default Navbar

