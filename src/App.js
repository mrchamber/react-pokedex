import { Header } from './componets/Navbar.js/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import PokemonDetails from './componets/pokemon/pokemonDetails';
import PokemonList from './componets/pokemon/pokemonList';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={PokemonList} />
          <Route exact path="/pokemon/:id" Component={PokemonDetails} />
        </Routes>
      </Router>
    </div>
  )
}
