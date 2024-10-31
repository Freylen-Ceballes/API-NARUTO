import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/firebaseConfig';
import { Card, CardContent, Typography, Container, Grid2 } from '@mui/material';
import "./Favorites.css"

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const querySnapshot = await getDocs(collection(db, 'favorites'));
      const favs = querySnapshot.docs.map(doc => doc.data());
      setFavorites(favs);
    };

    fetchFavorites();
  }, []);

  return (
    <div id='div-favorites'>
      <Container>
        <Grid2 container spacing={2}>
          {favorites.map((fav, index) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
              <div id='card-favorites'>
                <Card sx={{ marginBottom: 2, borderRadius: 10 }}>
                  <CardContent>
                    <Typography component="div" variant="h5">
                      {fav.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Cumpleaños: {fav.birthday}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Favorites;
