import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharactersDetails from '../../Components/CharactersDetails/CharactersDetails';
import { Container } from '@mui/material';
import { addFavorite } from '../../FireBase/firestoreUtils';

const CharactersPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://dattebayo-api.onrender.com/characters/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div>Cargando...</div>;

  return (
    <Container>
      <CharactersDetails characters={[character]} onFavorite={addFavorite} />
    </Container>
  );
};

export default CharactersPage;

