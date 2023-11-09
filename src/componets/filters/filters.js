import React, { useState } from 'react'
import './filter.css'

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

export default function Filters() {

    const [region, setRegion] = useState("Region");
    let handleRegionChange = (e) => {
        setRegion(e.target.value)
    }

    const [type, setType] = useState("Type");
    let handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const [sort, setSort] = useState("Sort");
    let handleSortChange = (e) => {
        setSort(e.target.value)
    }

    const [search, setSearch] = useState("");
    let handleSearchChange = (e) => {
        setSearch(e.target.value)
        const search = e.target.value;
        setSearch(search);
    }

    return (
        <div className="filter_container">
                <div class="filter_items">
                    <label>Region</label>
                    <br />
                    <select onChange={handleRegionChange} className="filter_input">
                        <option value="Select a region">Select a region</option>
                        {regions.map((region) => <option value={region.value}>{region.label}</option>)}
                    </select>
                </div>
                <div class="filter_items">
                    <label>Type</label>
                    <br />
                    <select onChange={handleTypeChange} className="filter_input">
                        <option value="Select a type">Select a type</option>
                        {types.map((type) => <option value={type.value}>{type.label}</option>)}
                    </select>
                </div>
                <div class="filter_items">
                    <label>Sort By</label>
                    <br />
                    <select onChange={handleSortChange} className="filter_input">
                        <option value="Sort by">Sort by</option>
                        {sorts.map((sort) => <option value={sort.value}>{sort.label}</option>)}
                    </select>
                </div>
                <div class="filter_items">
                    <label>Search</label>
                    <br />
                    <input className="filter_input" type="text" placeholder="Search Pokemon" onChange={handleSearchChange} />
                </div>
            </div>
    );
}
