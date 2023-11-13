import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { POKEMON_API_URL, POKEMON_IMG_URL } from '../../config';
import PokemonCard from '../pokemon/pokemonCard';
import '../pokemon/pokemonList.css'
import { CircularProgress } from '@material-ui/core';
import '../filters/filter.css'


export default function PokemonList() {

    const [pokemonData, setpokemonData] = useState(null)
    useEffect(() => {
        axios.get(POKEMON_API_URL).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                const results = response.data
                let newPokemonData = []
                results.forEach((pokemon, index) => {
                    index++;
                    let pokemonObject = {
                        url: POKEMON_IMG_URL + index + ".png",
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

    const regions = [
        { value: 'all region', label: 'All Region' },
        { value: 'kanto', label: 'Kanto' },
        { value: 'johto', label: 'Johto' },
        { value: 'hoenn', label: 'Hoenn' },
        { value: 'sinnoh', label: 'Sinnoh' },
        { value: 'unova', label: 'Unova' },
        { value: 'kalos', label: 'Kalos' },
        { value: 'alola', label: 'Alola' },
        { value: 'galar', label: 'Galar' },
        { value: 'hisui', label: 'Hisui' },
        { value: 'paldea', label: 'Paldea' },
        { value: 'kitakami', label: 'Kitakami' }
    ];

    const types = [
        { value: 'all types', label: 'All Types' },
        { value: 'bug', label: 'Bug' },
        { value: 'dark', label: 'Dark' },
        { value: 'dragon', label: 'Dragon' },
        { value: 'electric', label: 'Electric' },
        { value: 'fairy', label: 'Fairy' },
        { value: 'fighting', label: 'Fighting' },
        { value: 'fire', label: 'Fire' },
        { value: 'flying', label: 'Flying' },
        { value: 'ghost', label: 'Ghost' },
        { value: 'grass', label: 'Grass' },
        { value: 'ground', label: 'Ground' },
        { value: 'ice', label: 'Ice' },
        { value: 'normal', label: 'Normal' },
        { value: 'poison', label: 'Poison' },
        { value: 'psychic', label: 'Psychic' },
        { value: 'rock', label: 'Rock' },
        { value: 'steel', label: 'Steel' },
        { value: 'water', label: 'Water' }
    ];

    const sorts = [
        { value: 'id-asc', label: 'Ascending' },
        { value: 'id-dsc', label: 'Descending' }
    ];

    const [region, setRegion] = useState(null);
    let handleRegionChange = (e) => {
        const region = e.target.value;
        setRegion(e.target.value)
        console.log(region)
    }

    const [type, setType] = useState("Type");
    let handleTypeChange = (e) => {
        const type = e.target.value;
        setType(e.target.value)
        console.log(type)
    }

    const [sort, setSort] = useState("Sort");
    let handleSortChange = (e) => {
        const sort = e.target.value;
        setSort(e.target.value)
        console.log(sort)
    }

    const [search, setSearch] = useState("");
    let handleSearchChange = (e) => {
        setSearch(e.target.value)
        const search = e.target.value;
        setSearch(search);
    }


    return (
        <>
            <div className="filter_container">
                <div className="filter_items">
                    <label>Region</label>
                    <br />
                    <select onChange={handleRegionChange} className="filter_input">
                        <option value="Select a region">Select a region</option>
                        {regions.map((region) => <option value={region.value}>{region.label}</option>)}
                    </select>
                </div>
                <div className="filter_items">
                    <label>Type</label>
                    <br />
                    <select onChange={handleTypeChange} className="filter_input">
                        {types.map(type => <option value={type.value}>{type.label}</option>)}
                    </select>
                </div>
                <div className="filter_items">
                    <label>Sort By</label>
                    <br />
                    <select onChange={handleSortChange} className="filter_input">
                        <option value="Sort by">Sort by</option>
                        {sorts.map((sort) => <option value={sort.value}>{sort.label}</option>)}
                    </select>
                </div>
                <div className="filter_items">
                    <label>Search</label>
                    <br />
                    <input className="filter_input" type="text" placeholder="Search Pokemon" onChange={handleSearchChange} />
                </div>
            </div>
            <div className='poke-container'>
                {pokemonData ? pokemonData.map((pokemon) => {
                    return (
                        <PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id} />
                    )
                }) : <CircularProgress />}
            </div>
        </>
    );
}
