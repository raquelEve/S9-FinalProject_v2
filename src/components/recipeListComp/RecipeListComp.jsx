
import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeListComp.css'

export default function RecipeListComp({ recipe }) {
    console.log("recipeeeee", recipe);

    return (
        <>
            <div className="card bg-base-100 shadow-xl mb-4" key={recipe.idMeal}>
                <figure>
                    <img
                        src={recipe.strMealThumb} alt={recipe.strMeal} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-center h-[60px] table-cell align-top mb-[-5px]">{recipe.strMeal}</h2>

                    <div className="card-actions justify-center">
                        <Link className="btn btn-primary" to={`/recipe/${recipe.idMeal}`}>See More +</Link>
                    </div>
                </div>
            </div>

        </>
    )
}


