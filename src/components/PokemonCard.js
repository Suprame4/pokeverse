import React from 'react';
import {useState, useEffect, useContext} from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import axios from "axios"
import {FavoritesContext} from '../FavoritesProvider'

function PokemonCard({ url, name }) {

  const [pokeStats, setPokeStats] = useState(null)

  const { favorites, addFavorite, removeFavorite} = useContext(FavoritesContext)

  useEffect(() => {
    const pokeRequest2 = async () => {
      const res = await axios.get(url)
      setPokeStats(res.data)
      console.log("RESULTS: ", res.data)
    }
    pokeRequest2()
    .catch(error => {
      console.log(error)
    })
  }, [url])

  return (
    <div>
        <Card style={{width: '18rem'}} className='mx-auto'>
          {/* Double check on the item?.item?.item syntax */}
          <Card.Img 
            width='286'
            height='286'
            bg='dark'
            variant='top'
            src={pokeStats?.sprites?.front_default}/>
            <Card.Body>
              <Card.Title>
                {name}
              </Card.Title> 
              <Card.Text as="div"> 
                Abilities: 
                  <ul>
                    {pokeStats?.abilities.map(ability => <li>{ability.ability.name} </li>)}
                  </ul>
              </Card.Text>

              {!(favorites.includes(name)) ? 
              <Button variant="primary" onClick={() => addFavorite(pokeStats.name)}>
                Add to Favorites {console.log(favorites)}
              </Button> :
              <Button variant="primary" onClick={() => removeFavorite(pokeStats.name)}>
                Remove from Favorites
              </Button>
              }
            </Card.Body>
        </Card>
    </div>
  );
}

export { PokemonCard };
