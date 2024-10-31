import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import { addFavorite } from '../../FireBase/firestoreUtils';
import "./CharactersDetails.css"

const CharactersDetails = ({ characters }) => {
  const { id } = useParams();
  const character = characters.find(char => char.id === parseInt(id));

  if (!character) return <div>Personaje no encontrado</div>;

  console.log(character)

  return (
    <div id='div-details'>
      <h1 id='tittle-details'>PERSONAJE SELECCIONADO</h1>
      <Card sx={{borderRadius: 10}}>
        <Carousel sx={{padding: 2, borderRadius: 25}}>
          {character.images.map((image, index) => (
            <img key={index} src={image} alt={`${character.name} ${index}`} style={{ width: '100%' }} />
          ))}
        </Carousel>
        <CardContent sx={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
          <Typography component="div" variant="h5" gutterBottom>
            {character.name}
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <strong>Clan:</strong> {character.personal.clan}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <strong>Familia:</strong>
              <ul>
                {Object.entries(character.family).map(([relation, name]) => (
                  <li key={relation}>{relation}: {name}</li>
                ))}
              </ul>
            </Typography>
          </Box>
          <IconButton sx={{ color: 'red' }} onClick={() => addFavorite(character)}>
            <Favorite />
          </IconButton>
        </CardContent>
      </Card>
    </div>

  );
};

export default CharactersDetails;



