import React from 'react'
import './InspirationComp.css'
import inspirationList from '../../data/inspirationList'
import { Link } from 'react-router-dom';

export default function InspirationComp() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];
    return (
        <>
            <h2 className="text-center text-2xl font-bold my-10">inspiration</h2>

            <div className='grid md:grid-cols-2 gap-4 xl:grid-cols-3' id="inspiration">
                {inspirationList.meals.map((recipe) => (
                    <Link to={`/recipe/${recipe.idMeal}`}
                        key={recipe.idMeal}
                        className="h-64 bg-cover bg-center rounded-box relative "
                        style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
                    >
                        <h3 className='absolute bottom-0 left-0 w-full text-white text-center bg-black bg-opacity-50 py-2'>{recipe.strMeal}</h3>
                    </Link>
                ))}
            </div>
        </>
    )
}
