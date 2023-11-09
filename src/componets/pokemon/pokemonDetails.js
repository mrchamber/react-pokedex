import axios from 'axios'
import React, { Component } from 'react'
import { POKEMON_API_URL } from '../../config'

export default class PokemonDetails extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
        pokemon: null
    }
  }

  componentDidMount(){
    const { match } = this.props
    const { id } = match?.params
    axios.get(POKEMON_API_URL + "/" + id).then((reponse) => {
        if(reponse.status >= 200 && reponse.status < 300) {
            console.log(reponse.data)
            this.setState({pokemon: reponse.data})
        }
    })
  }

    render() {
    return (
      <div>
        
      </div>
    )
  }
}
