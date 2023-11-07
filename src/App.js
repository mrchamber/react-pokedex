import React, {useState, useEffect} from 'react';
import Header from './componets/header/header';
import Filters from './componets/filters/filters';
import PokemonList from './componets/pokemon/pokemonList';
import axios from 'axios';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <PokemonList />
    </div>
  );
}

export default App;
