import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar (props) {
    return (
        <nav>
            <ul className="main-nav">
                <li>
                    <Link to='/'><img src="https://png.pngtree.com/element_our/png_detail/20181022/movie-cinema-entertainment-logo-with-neon-sign-effect-vector-illustration-png_199478.jpg" alt=""/></Link>
                    
                </li>
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

