import React from 'react';
import {useState, useEffect} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { InputGroup, Form, Col, Container, Row} from 'react-bootstrap';
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

      <Container>
        <Row className='mb-4'>
          <Col sm='8' md='6' className='mx-auto'>
            <InputGroup>
              <InputGroup.Text id="search">Search</InputGroup.Text>
              <Form.Control 
              placeholder="Name"
              aria-label="Name"
              aria-describedby="search"
              onChange={handleChange}
          //alternative onChange
          // onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>


      <div class="container">
        {pokeFiltered.map(poke => {
          return (
            <PokemonCard name={poke.name} url={poke.url} list={pokeFiltered}/>
          )
        })}
      </div>
      </Container>
    </div>
  );
}

export { App };
