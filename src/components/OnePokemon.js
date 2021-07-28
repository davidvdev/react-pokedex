import React from 'react'

const OnePokemon = (props) => {
    
    const loading = () => {
        return <></>
    }

    const loaded = () => {

        const formatted = props.name.charAt(0).toUpperCase() + props.name.slice(1)

        return (
            <div className="pokemon-card">
                <img src={props.sprites.front_default} alt={formatted}/>
                <img src={props.sprites.back_default} alt={formatted}/>
                <h3>{formatted} #{props.order}</h3>
                <div className="card-details">
                    <h3>Height: {props.height / 10}m</h3>
                    <h3>Weight: {props.weight / 10}kg</h3>
                    <h4>Type: {props.types.map((type, index) => {
                        return <span key={index}> {type.type.name} </span>
                    })}</h4>
                </div>
                <button onClick={() => props.handleClick(props)}>Add to My Team</button>
            </div>
        )
    }

    return props.name ? loaded() : loading()
}

export default OnePokemon