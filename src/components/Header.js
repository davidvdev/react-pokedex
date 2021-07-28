import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <img className="pikachu" src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pikachu.gif" alt="dancing pikachu"/>
            <Link to="/" >Pokédex</Link>
            <img className="logo" src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pokemon-logo.png" />
            <Link to="/MyTeam" >My Team</Link>
        </header>
    )
}

export default Header