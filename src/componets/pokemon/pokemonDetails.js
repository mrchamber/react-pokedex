import axios from 'axios'
import React, { Component } from 'react'
import { POKEMON_API_URL } from '../../config'
import { useParams } from 'react-router-dom'


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
                console.log(response.data)
                this.setState({pokemon: response.data})
            }
        })
    }
  render() {
    const { pokemon } = this.state;
    if(pokemon) {
        const { name, image, type } = pokemon;
        return (
            <div>
                <p>{name}</p>
                <p><img src={image}/></p>
                <p>{type.T1}/{type.T2}</p>
                </div>
          )
    }
  }
}

export default withParams(pokemonDetails)
