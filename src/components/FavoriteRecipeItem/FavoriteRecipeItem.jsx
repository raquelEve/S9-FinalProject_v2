import React from 'react'
import { MdFavorite } from "react-icons/md";
import { Link, Navigate } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";
import './FavoriteRecipeItem.css'

export default function FavoriteRecipeItem({ recipe }) {

    const { idMeal, strMeal } = recipe;

    return (
        <Link className='link-user-fav' to={`/recipe/${idMeal}`}>
            <div className="recipe-item">
                {strMeal}
            </div>
        </Link>
    )
}
