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

  const callAPIforList = async () => {
    const url = (`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setPokemonList(data)
  }

  useEffect(()=>{
      callAPIforList()
      console.log(pokemonList)
  },[])

  const handleClick = (event) => {
    console.log(event)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main {...pokemonList} handleClick={handleClick}/> 
        </Route>
        <Route path="/MyTeam">
          <MyTeam />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
