import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: true,
    favorites: [],
};

export const userSlice = createSlice({

    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        logoutUser: (state) => {
            state.user = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload); // Añadir receta favorita al array
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(recipe => recipe.id !== action.payload); // Eliminar receta favorita del array
        },
    },
});
export const { loginUser, logoutUser, setUser, addFavorite, removeFavorite } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectFavorites = state => state.user.favorites;

export default userSlice.reducer;