import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Grid2 } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { addFavorite } from '../../FireBase/firestoreUtils';
import "./CharactersCard.css"

const CharactersCard = ({ character }) => {
  return (
    <div id='div-card'>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, 
        width: 535, marginBottom: 5, marginTop: 2, marginLeft: 1 , padding: 2, background: 'lemonchiffon', 
        borderRadius: 20, alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{ width: { xs: '100%', sm: 300 }, height: 300, borderRadius: 20 }}
            image={character.images[0]}
            alt={character.name}
          />
          <CardContent sx={{ flex: '1 1 auto' }}>
            <Typography component="div" variant="h5">
              {character.name}
            </Typography>
            <Link to={`/character/${character.id}`} >
              <Typography variant="body2" color="primary">
                Ver detalles
              </Typography>
            </Link>
            <IconButton sx={{ color: 'red' }} onClick={() => addFavorite(character)}>
              <Favorite />
            </IconButton>
          </CardContent>
        </Card>
      </Grid2>
    </div>
  );
};

export default CharactersCard;


