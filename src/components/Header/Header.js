import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <Link to="/"><h2>Pic some</h2></Link>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link> 
        </header>
    )
}

export default Header
