import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

const RecipesContext = createContext();

const initialState = {
    recipes: [],
    loading: false,
    error: null,
};

export default function RecipesContext() {
    return (
        <div>RecipesContext</div>
    )
}
