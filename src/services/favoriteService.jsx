import { db } from '../firebase';

// Función para añadir un favorito a Firestore
export const addFavorite = async (userId, favoriteRecipe) => {
    try {
        const docRef = await addDoc(collection(db, 'favorites', userId), favoriteRecipe);
        console.log('Favorito añadido con ID: ', docRef.id);
        return docRef.id; // Retorna el ID del documento creado (opcional)
    } catch (error) {
        console.error('Error añadiendo el favorito: ', error);
        throw error; // Manejar el error según sea necesario
    }
};

// Función para obtener los favoritos de un usuario desde Firestore
export const getFavorites = async (userId) => {
    try {
        const snapshot = await getDocs(collection(db, 'favorites', userId));
        const favorites = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return favorites;
    } catch (error) {
        console.error('Error obteniendo los favoritos: ', error);
        throw error; // Manejar el error según sea necesario
    }
};
