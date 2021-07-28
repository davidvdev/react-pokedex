import React from 'react'

import MyTeam from './MyTeam'
import OnePokemon from '../components/OnePokemon'

const Main = (props) => {

    const loaded = () => {

        const handleClick = (event) => {
            console.log(event)
            props.handleClick(event)
        }

        return (
                <main>
                    <ul className="pokemon-list">
                        {props.results.map((pokemon, index) => {
                            const formatted = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                            return (
                                <li 
                                    key={index}
                                    name={pokemon.name}
                                    onClick={handleClick}
                                    >
                                    {formatted} <img class="pokeball" src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/closed-pokeball-color.png"></img>
                                </li>
                                )
                        })}
                    </ul>
                    <div className="one-pokemon">
                        <OnePokemon {...props.onePokemon} handleClick={props.buttonClick}/>
                    </div>
                </main>
            )
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return props.results ? loaded() : loading()
}

export default Main