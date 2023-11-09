import Header from './componets/header/header';
import PokemonList from './componets/pokemon/pokemonList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import PokemonDetails from './componets/pokemon/pokemonDetails';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={PokemonList} />
          <Route exact path="/pokemon/:id" Component={PokemonDetails}/>
        </Routes>
      </Router>
    </div>
  )
}
