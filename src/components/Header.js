import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link to="/" >Pokedex</Link>
            <h1>POKEMON</h1>
            <Link to="/MyTeam" >My Team</Link>
        </header>
    )
}

export default Header