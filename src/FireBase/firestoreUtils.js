import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const addFavorite = async (character) => {
  try {
    await addDoc(collection(db, 'favorites'), {
      image: character.images[0],
      name: character.name,
      birthday: character.personal.birthdate,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { addFavorite };
