import React from 'react'

const MyTeam = (props) => {

    return (<div className="my-team">
        {props.myTeam.map((pokemon, index) => {

            const formatted = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

            const colorByType = () => {
                const type = pokemon.types[0].type.name
                let color = 'grey'
                switch(type){
                     case 'water': color = '#44A9D7'; break;
                     case 'grass': color = '#98C39E'; break;
                     case 'fire': color = '#E97858'; break;
                     case 'bug': color = '#CEE3B6'; break;
                     case 'normal': color = '#E0DED3'; break;
                     case 'fighting': color = '#EFD3AD'; break;
                     case 'psychic': color = '#C999C8'; break;
                     case 'ghost': color = '#D6AFD1'; break;
                     case 'electric': color = '#F9EEA9'; break;
                     default: color = '#E0DED3'; break;
                }
                return color
             }

            return (
                <div className="pokemon-card team-card" key={index} style={{backgroundColor: colorByType()}}>
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