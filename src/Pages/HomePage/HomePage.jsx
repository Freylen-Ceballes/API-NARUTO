import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharactersCard from '../../Components/CharactersCard/CharactersCard';
import { Container, Grid, Grid2 } from '@mui/material';
import { addFavorite } from '../../FireBase/firestoreUtils';
import "./HomePage.css"

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://dattebayo-api.onrender.com/characters');

        setCharacters(response.data.characters);
      } catch (error) {
        setError('Error fetching characters');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div id='div-home'>
      <Container>
        <Grid2 container spacing={2}>
          {characters.map(character => (
            <Grid2 item xs={12} key={character.id}>
              <CharactersCard character={character} onFavorite={addFavorite} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default HomePage;

