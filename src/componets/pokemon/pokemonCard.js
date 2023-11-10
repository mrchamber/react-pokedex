import React from 'react'
import '../pokemon/pokemonCard.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const colors = {
    generation1: "linear-gradient(145deg, " + '#1111ff' + ", " + '#ff1111' + ", " + '#ffd733' + ")",
    generation2: "linear-gradient(145deg, " + '#daa520' + ", " + '#c0c0c0' + ", " + '#4fd9ff' + ")",
    generation3: "linear-gradient(145deg, " + '#a00000' + ", " + '#0000a0' + ", " + '#00a000' + ")",
    generation4: "linear-gradient(145deg, " + '#aaaaff' + ", " + '#ffaaaa' + ", " + '#999999' + ")",
    generation5: "linear-gradient(145deg, " + '#444444' + ", " + '#e1e1e1' + ")",
    generation6: "linear-gradient(145deg, " + '#6376b8' + ", " + '#ed5540' + ")",
    generation7: "linear-gradient(145deg, " + '#f1912b' + ", " + '#5599ca' + ")",
    generation8: "linear-gradient(145deg, " + '#00d1f6' + ", " + '#9e2306' + ")",
    generation85: "linear-gradient(145deg, " + '#fad709' + ", " + '#f1f4f4' + ", " + '#5e6365' + ")",
    generation9: "linear-gradient(145deg, " + '#c91421' + ", " + '#632ea6' + ")",
    generation95: "linear-gradient(145deg, " + '#4c9c3f' + ", " + '#282e26' + ", " + '#22a496' + ")"
}

export default function PokemonCard(props) {
    const { pokemon, image} = props;
    const { id, name } = pokemon;
    return (
        <div className='pokemon' style={{ background: colors[pokemon.generation]}}>
            <Link to={{pathname: "/pokemon/" + id, style: {id, name} }} style={{textDecoration: 'none'}}>
                <div className='card'>
                    <div className='img-con'>
                        <img src={image} alt='some pokemon' className='poke' />
                    </div>
                    <div className='info'>
                        <span className='number'>#{id.toString().padStart(3, '0')}</span>
                        <h3 className='name'>{name[0].toUpperCase() + name.slice(1)}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}