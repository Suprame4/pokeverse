import React from 'react';
import {useState, useEffect} from 'react';
import "../styles.css"
import { Layout } from "./Layout"

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

const Home = () => {
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
        <Layout pokeFiltered={pokeFiltered} handleChange={handleChange} />
    )

}

export { Home }