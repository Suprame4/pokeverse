import React, {useContext} from 'react' 
import {FavoritesContext} from '../FavoritesProvider'
import { PokemonCard } from '../components/PokemonCard'
import { Col, Container, Row} from 'react-bootstrap'
import { Navigation } from '../components/Navigation'


const Favorites = () => {

    const { favorites } = useContext(FavoritesContext)
    
    console.log(favorites)

    return(
        <>
        <Navigation/>
        <Container>
            <Row className='g-4'>
            {favorites.map((favorite, idx) => <>
            <PokemonCard name={favorite} url={`https://pokeapi.co/api/v2/pokemon/${favorite}`}/>
            </>
        )}
            </Row>
        </Container>
        
        </>
    )
}

export default Favorites;