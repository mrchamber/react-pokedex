import axios from 'axios'
import { POKEMON_API_URL } from '../../config'
import { useParams } from 'react-router-dom'

import React from 'react'

const PokemonDetails = (props) => {
    const { id } = useParams();
    axios.get(POKEMON_API_URL + "/" + id).then((reponse) => {
        if(reponse.status >= 200 && reponse.status < 300){
            console.log(reponse.data)
        }
    })
  return (
    <div>

    </div>
  )
}
export default PokemonDetails
