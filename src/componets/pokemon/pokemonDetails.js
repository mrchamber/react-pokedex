import axios from 'axios'
import React, { Component } from 'react'
import { POKEMON_API_URL } from '../../config'
import { useParams } from 'react-router-dom'
import './pokemonDetails.css'


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
    
  }

class pokemonDetails extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pokemon: null
        }
    }
    componentDidMount() {
        const { id } = this.props.params;
        axios.get(POKEMON_API_URL + "/" + id).then((response) => {
            if(response.status >=200 && response.status < 300) {
                this.setState({pokemon: response.data})
            }
        })
    }
  render() {
    const infoColors = {
        Bug: '#A6B91A',
        Dark: '#705746',
        Dragon: '#6F35FC',
        Electric: '#F7D02C',
        Fairy: '#D685AD',
        Fighting: '#C22E28',
        Fire: '#EE8130',
        Flying: '#A98FF3',
        Ghost: '#735797',
        Grass: '#7AC74C',
        Ground: '#E2BF65',
        Ice: '#96D9D6',
        Normal: '#A8A77A',
        Poison: '#A33EA1',
        Psychic: '#F95587',
        Rock: '#B6A136',
        Steel: '#B7B7CE',
        Water: '#6390F0',
    }
    const { pokemon } = this.state;
    if(pokemon) {
        const { abilities, category, cry, entry, evolution, height, id, image, name, stats, type, weight } = pokemon;
        const  poke_type = type.T1;
        const  poke_type2 = type.T2;
        const finalType = Object.values(pokemon.type).map((type) => type).join('/');
        const color = infoColors[poke_type];
        const color2 = infoColors[poke_type2];
        console.log(Object.keys(pokemon.type).length)
        let poke = document.getElementById("poke-card-body");
        if (Object.keys(pokemon.type).length === 2) {
            poke.style.background = "linear-gradient(145deg, " + color + ", " + "#d3d3d3" + ", " + color2 + ")";
        }
    
        if (Object.keys(pokemon.type).length === 1) {
            poke.style.background = "linear-gradient(145deg, " + color + ", " + "#d3d3d3" + ", " + color + ")";
        }
        return (
            <div className="poke_card">
            <div className="poke-card-body" id="poke-card-body">
                <div className="left-side">
                    <h1 className="num">#{id.toString().padStart(3, '0')}</h1>
                    <h2 className="card-name">{name}</h2>
                    <h2 className="card-title"><em>The {category} Pokemon</em></h2>
                    <img src={image} className="card-img" id="card-img" />
                    <h3 className="poke-height">{finalType}</h3>
                    <h3 className="poke-height">{height}</h3>
                    <h3 className="poke-height">{weight}</h3>
                </div>
                <div className="right-side">
                    <h2 className="section-header">Entry: </h2>
                    <div className="enrty-container">
                        <p className="enrty-info">{entry.Blue}</p>
                    </div>
                    <h2 className="section-header">Abilities: </h2>
                    <div className="ability-container">
                         <p className="ability-info">{abilities}</p>
                    </div>
                    <h2 className="section-header">Base Stats: </h2>
                    <div className="bs-container">
                        <div className="stat-columns">
                            <div className="stat-name">HP</div>
                            <div className="stat-val">{stats.HP}</div>
                        </div>
                        <div className="stat-columns">
                            <div className="stat-name">Attack</div>
                            <div className="stat-val">{stats.Attack}</div>
                        </div>
                        <div className="stat-columns">
                            <div className="stat-name">Defense</div>
                            <div className="stat-val">{stats.Defense}</div>
                        </div>
                        <div className="stat-columns">
                            <div className="stat-name">Sp. Attack</div>
                            <div className="stat-val">{stats.SpAtk}</div>
                        </div>
                        <div className="stat-columns">
                            <div className="stat-name">Sp. Defense</div>
                            <div className="stat-val">${stats.SpDef}</div>
                        </div>
                        <div className="stat-columns">
                            <div className="stat-name">Speed</div>
                            <div className="stat-val">{stats.Speed}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )
    }
  }
}

export default withParams(pokemonDetails)
