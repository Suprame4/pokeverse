import React from 'react';
import {useState, useEffect} from 'react'
import Card from "react-bootstrap/Card"
import axios from "axios"


function PokemonCard({ url, name }) {

  const [pokeStats, setPokeStats] = useState(null)
  
  /*const pokeRequest2 = async () => {
    const res = await fetch(url)
    const data = await res.json()

    console.log("Results 2: ", data)

    setPokeStats(data)
  }*/

  useEffect(() => {
    const pokeRequest2 = async () => {
      const res = await axios.get(url)
      setPokeStats(res.data)
      console.log("RESULTS: ", res.data)
    }
    pokeRequest2()
   
  }, [])

  return (
    <div>
        <Card>
          {/* Double check on the item?.item?.item syntax */}
          <Card.Img src={pokeStats?.sprites?.front_default}/>
            <Card.Body>
              <Card.Title>
                {name}
              </Card.Title> 
              <Card.Text>
                Abilities: 
                  <ul>
                    {pokeStats?.abilities.map(ability => <li>{ability.ability.name} </li>)}
                  </ul>
              </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export { PokemonCard };
