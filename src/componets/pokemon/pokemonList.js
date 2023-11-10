import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {POKEMON_API_URL, POKEMON_IMG_URL} from '../../config';
import PokemonCard from '../pokemon/pokemonCard';
import '../pokemon/pokemonList.css'
import { CircularProgress } from '@material-ui/core';

export default function PokemonList() {

    const [pokemonData, setpokemonData] = useState(null)
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
                    name: pokemon.name,
                    generation: pokemon.generation
                }
                newPokemonData.push(pokemonObject);
            });
            setpokemonData(newPokemonData);
        }
    })
  }, [])

  return (
    <div className='poke-container'>
        {pokemonData ? pokemonData.map((pokemon) => {
                return (
                    <PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>
                )
            }): <CircularProgress />}
    </div>
  );
}
