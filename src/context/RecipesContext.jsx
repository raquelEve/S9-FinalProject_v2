import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
    const [recipesList, setRecipesList] = useState([]);
    const [recipe, setRecipe] = useState(null);

    const getRecipeListByCategory = (category) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    setRecipesList(data.meals);
                }
            })
            .catch(error => console.error('Error fetching recipe list:', error));
    };

    const getRecipeById = (id) => {
        console.log("id en llamada");
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    setRecipe(data.meals[0]);
                    console.log("recipe in call", recipe);
                } else {
                    setRecipe(null);  // Set recipe to null if no data
                }
            })
            .catch(error => console.error('Error fetching recipe by ID:', error));
    };

    const value = {
        recipesList,
        recipe,
        getRecipeById,
        getRecipeListByCategory
    };

    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;
