import React from 'react';
import {useState, useEffect} from 'react';
import {Typography, Card, Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

const PokemonDetail = () => {
  const params = useParams();
  const [pokeData, setPokeData] = useState();

  useEffect(()=>{
    const retrieve = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
      const data = await res.json();
      setPokeData(data);
    }
    retrieve();
  }, []);

  if (pokeData === undefined) return null;

  return <>
      <Navigation/>
      <div sx={{
        display: "flex",
        justifyContent: "center",
        mx: "auto"
      }}>
      <Card sx={{
        mx: 1,
        width: 600,
        height: 700,
        }}> 
        <CardMedia
          image={pokeData.sprites.other["official-artwork"]["front_default"]}
          title={pokeData.name}
          sx={{ height: 400,
                width: "60%",
                objectFit: "cover",
                mx: "auto"}}
        />
        <CardContent>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Typography gutterBottom variant="h5" component="div" className="poke-title-ext">
              {pokeData.name}
            </Typography>
            <Typography gutterBottom variant="h6" color="text.secondary">
              {pokeData.id}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.primary">height: {pokeData.height}</Typography>
          <Typography variant="body1" color="text.primary">weight: {pokeData.weight}</Typography>
          <Typography variant="body1" color="text.primary">
            types:
          </Typography>
          {pokeData.types.map((t, idx) => <>
          <Typography key={idx} variant="body2" color="text.secondary">{t.type.name}</Typography>
          </>)}
          <Typography variant="body1" color="text.primary">
            abilities:
          </Typography>
          {pokeData.abilities.map((a, idx) => <>
          <Typography key={idx} variant="body2" color="text.secondary">{a.ability.name}</Typography>
          </>)}
        </CardContent>
      </Card>
      </div>
  </>
}

export { PokemonDetail };