import React from 'react'

const MyTeam = (props) => {

    const handleClick = (index, props) => {
        console.log(index)
        console.log(props)
        props.handleClick(index, props)
    }

    return (<div className="my-team">
        {props.myTeam.map((pokemon, index) => {
            const formatted = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            return (
                <div className="pokemon-card team-card" key={index}>
                    <img src={pokemon.sprites.front_default} alt={formatted}/>
                    <img src={pokemon.sprites.back_default} alt={formatted}/>
                    <h3>{formatted} #{pokemon.order}</h3>
                    <div className="card-details">
                        <h3>Height: {pokemon.height / 10}m</h3>
                        <h3>Weight: {pokemon.weight / 10}kg</h3>
                        <h4>Type: {pokemon.types.map((type, index) => {
                            return <span key={index}> {type.type.name} </span>
                        })}</h4>
                    </div>
                    <button onClick={() => {props.handleClick(index, props)}}>Release</button>
                </div>
            )
        })}
    </div>)
    
    }


export default MyTeam