import React, { useEffect,useState } from 'react'
import './App.css';

// Components & Pages
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Main'
import { Route, Switch } from 'react-router';
import MyTeam from './pages/MyTeam';

function App() {

  const [pokemonList, setPokemonList] = useState(null)
  const [onePokemon, setOnePokemon] = useState(null)
  const [myTeam, setMyTeam] = useState([])

  const callAPIforList = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`
    const response = await fetch(url)
    const data = await response.json()
    console.log('API for List',data)
    setPokemonList(data)
  }

  const callAPIforPokemon = async (pokemon) => {
    const name = pokemon.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    console.log('API for pokemon',data)
    setOnePokemon(data)
  }

  useEffect(()=>{
      callAPIforList()
      console.log(pokemonList)
  },[])

  const grabOnePokemon = (event) => {
    callAPIforPokemon(event.target.innerText)
    console.log(event)
  }

  const addToMyTeam = (pokemon) => {
    setMyTeam([...myTeam, pokemon])
  }

  const removeFromMyTeam = (id) => {
    const newTeam = [...myTeam].splice(id, 1)
    setMyTeam(newTeam)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main {...pokemonList} onePokemon={onePokemon} handleClick={grabOnePokemon} buttonClick={addToMyTeam}/> 
        </Route>
        <Route path="/MyTeam">
          <MyTeam myTeam={myTeam} handleClick={removeFromMyTeam}/>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
