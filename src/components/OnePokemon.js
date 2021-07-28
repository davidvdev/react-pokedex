import React from 'react'

const OnePokemon = (props) => {
    
    const loading = () => {
        return <></>
    }

    const loaded = () => {

        const colorByType = () => {
           const type = props.types[0].type.name
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
        
        const formatted = props.name.charAt(0).toUpperCase() + props.name.slice(1)

        return (
            <div className="pokemon-card" style={{backgroundColor: colorByType()}}>
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