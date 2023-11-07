import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {POKEMON_API_URL, POKEMON_IMG_URL} from '../../config'
export default function PokemonList() {

    const [pokemonData, setpokemonData] = useState()
  useEffect(() =>{
    axios.get(POKEMON_API_URL).then((response) => {
        if(response.status >=200 && response.status < 300) {
            const results  = response.data
            let newPokemonData = []
            results.forEach((pokemon, index) =>{
                index++;
                let pokemonObject = {
                    url: POKEMON_IMG_URL + index +".png",
                    id: index,
                    name: pokemon.name
                }
                newPokemonData.push(pokemonObject);
            });
            setpokemonData(newPokemonData);
        }
    })
  }, [])

  return (
    <div>
        {pokemonData ? pokemonData.map((pokemon) => {
            return <h1>{pokemon.name}</h1>
        }): <br />}
    </div>
  );
}
