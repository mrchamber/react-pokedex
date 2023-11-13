import axios from 'axios'
import React, { Component } from 'react'
import { POKEMON_API_URL, POKEMON_IMG_URL } from '../../config'
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
            if (response.status >= 200 && response.status < 300) {
                this.setState({ pokemon: response.data })
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
        if (pokemon) {
            const { abilities, category, cry, evolution, height, id, image, name, stats, type, weight } = pokemon;
            const poke_type = type.T1;
            const poke_type2 = type.T2;
            const finalType = Object.values(pokemon.type).map((type) => type).join('/');
            const color = infoColors[poke_type];
            const color2 = infoColors[poke_type2];

            let poke;
            if (Object.keys(pokemon.type).length === 2) {
                poke = "linear-gradient(145deg, " + color + ", " + "#d3d3d3" + ", " + color2 + ")";
            }

            if (Object.keys(pokemon.type).length === 1) {
                poke = "linear-gradient(145deg, " + color + ", " + "#d3d3d3" + ", " + color + ")";
            }


            let evo = [];
            if (Object.keys(pokemon.evolution).length === 3) {
                evo.push(<><div className='form-container'><img src={POKEMON_IMG_URL + evolution.E1.img + '.png'} className='evo-img'/> <div className="evoNext"><br /><br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ic_keyboard_arrow_right_48px.svg/48px-Ic_keyboard_arrow_right_48px.svg.png?20141023120053" className="arrow" />
                <span className="caption">{evolution.E1.way}</span></div></div><div className="form-container"><img src={POKEMON_IMG_URL + evolution.E2.img + ".png"} className="evo-img" /><div className="evoNext">
                <br /><br /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ic_keyboard_arrow_right_48px.svg/48px-Ic_keyboard_arrow_right_48px.svg.png?20141023120053" className="arrow" />
                <span className="caption">{evolution.E2.way}</span></div></div><div className="form-container"><img src={POKEMON_IMG_URL + evolution.E3.img + ".png"} className="evo-img" /></div></>);
            }
            if (Object.keys(pokemon.evolution).length === 2) {
                evo.push(<><div className='form-container'><img src={POKEMON_IMG_URL + evolution.E1.img + '.png'} className='evo-img'/> <div className="evoNext"><br /><br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ic_keyboard_arrow_right_48px.svg/48px-Ic_keyboard_arrow_right_48px.svg.png?20141023120053" className="arrow" />
                <span className="caption">{evolution.E1.way}</span></div></div><div className="form-container"><img src={POKEMON_IMG_URL + evolution.E2.img + ".png"} className="evo-img" /><div className="evoNext">
                <br /><br /></div></div></>);
            }
            if (Object.keys(pokemon.evolution).length === 0) {
                evo.push(<><div className='form-container'><img src={POKEMON_IMG_URL + evolution.E1.img + '.png'} className='evo-img'/> <div className="evoNext"><br /><br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ic_keyboard_arrow_right_48px.svg/48px-Ic_keyboard_arrow_right_48px.svg.png?20141023120053" className="arrow" />
                <span className="caption">{evolution.E1.way}</span></div></div></>);
            }
            
            let test = -1;
            let pokeEntrySet =[]

            const enrtyChanger = document.getElementById("changeEntry")

            const enrtyNextHandler = (dir) =>
            {
                test += dir;
                pokeEntrySet.splice(0);
                pokeEntrySet.push((Object.entries(pokemon.entry)[test]).join(":<br>"));
                enrtyChanger.innerHTML = '<p className="enrty-info" style="margin-top: 0;">' + pokeEntrySet + '<p>';
            }

            return (
                <div className="poke_card" key={id}>
                    <div className="poke-card-body" id="poke-card-body" style={{ background: poke }}>
                        <div className="left-side">
                            <h1 className="num">#{id.toString().padStart(3, '0')}</h1>
                            <h2 className="card-name">{name}</h2>
                            <h2 className="card-title"><em>The {category} Pokemon</em></h2>
                            <img src={image} alt={name} className="card-img" id="card-img" />
                            <audio controls style={{width: 250}}>
                                <source src={cry} type="audio/mp3" />
                            </audio>
                            <h3 className="poke-height">{finalType}</h3>
                            <h3 className="poke-height">{height}</h3>
                            <h3 className="poke-height">{weight}</h3>
                        </div>
                        <div className="right-side">
                            <h2 className="section-header">Entry: </h2>
                            <div className="enrty-container" >
                                <button onClick={() => enrtyNextHandler(-1)} className='button'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ic_keyboard_arrow_right_48px.svg/48px-Ic_keyboard_arrow_right_48px.svg.png?20141023120053" className="arrowButton" />
                                </button>
                                <div id="changeEntry" className='enrty-info'>
                                    <p>View entries</p>
                                </div>
                                <button onClick={() =>enrtyNextHandler(1)} className='button'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ic_keyboard_arrow_right_48px.svg/48px-Ic_keyboard_arrow_right_48px.svg.png?20141023120053" className="arrowButton1" />
                                </button>
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
                            <h2 className="section-header">Evolutions: </h2>
                            <div className="evo-container">
                                { evo }
                            </div>
                            <div>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withParams(pokemonDetails)
