import React from 'react';
import {useState, useEffect} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { InputGroup, Form } from 'react-bootstrap';
import "./styles.css"

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokeRaw, setPokeRaw] = useState([])
  const [pokeFiltered, setPokeFiltered] = useState([])

  const pokeRequest = async () => {
    const res = await fetch(pokeApi)
    const data = await res.json()

    console.log("Results: ", data.results)

    //set the data
    setPokeRaw(data.results)
    setPokeFiltered(data.results)
  }

  useEffect(() => {
    pokeRequest()
  }, [])

  function handleChange(e){
    //grab input value
    const value = e.target.value

    //regex to match input value
    const regex = new RegExp(value, 'gi')
    //filter matches from pokeRaw
    const filtered = pokeRaw.filter(poke => {
      return poke.name.match(regex) 
    })
    setPokeFiltered(filtered)
  }
  return (
    <div data-testid="app">
      <Navigation />
      <InputGroup>
        <InputGroup.Text id="search-id">Search</InputGroup.Text>
        <Form.Control 
          placeholder="Name"
          aria-label="Name"
          aria-describedby="search-id"
          onChange={handleChange}
        />
      </InputGroup>

      <h1>Pokemon should appear here</h1>
      <div class="container">
        {pokeFiltered.map(poke => {
          return (
            <PokemonCard name={poke.name} url={poke.url} list={pokeFiltered}/>
          )
        })}
      </div>
    </div>
  );
}

export { App };
