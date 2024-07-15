import React, { useEffect, useState } from 'react'
import './RecipeDetail.css'
import { ImAccessibility } from "react-icons/im";
import { FaWeightScale } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";

export default function RecipeDetail({ recipe }) {

    const [loading, setLoading] = useState(true);

    console.log("recipe in detail", recipe);

    useEffect(() => {
        if (recipe) {
            setLoading(false);  // Marcar como cargado cuando hay datos de receta
        }
    }, [recipe]);

    if (loading) return
    <div className='h-[100%] w-full flex justify-center items-center'>
        <span className="loading loading-ball loading-xs"></span>
    </div>;

    if (!recipe) return <div>No recipe found.</div>; // Manejar el caso donde no hay receta

    return (

        <>
            <div className="recipe-detail">
                <div className='container mx-auto flex justify-between items-end p-6 pb-0'>
                    <div>
                        <h1 className='font-playwriteBold text-2xl mt-14 ml-2 mb-2'>{recipe.strMeal}</h1>
                        <p className='text-[rgb(245,157,73)] font-bold mb-8 ml-2'>
                            {recipe.strCategory}&nbsp; - &nbsp;
                            <span>{recipe.strArea === 'Unknown' ? 'Not defined' : recipe.strArea}</span>
                        </p>
                    </div>

                </div>
                <div className='flex flex-col md:flex-row md:md:justify-between container mx-auto rounded-box bg-white px-8 p-6 shadow-lg'>

                    <img
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                        className="mb-4 w-full md:w-1/2 h-auto"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className='w-full md:w-1/3'>
                        <h2 className="text-xl font-bold mt-4">Ingredients</h2>
                        <ul className='mb-6'>
                            {Array.from({ length: 20 }, (_, i) => i + 1).map(i => (
                                recipe[`strIngredient${i}`] && (
                                    <li key={i} className='border-b-[1px] border-slate-400 flex items-center'>
                                        <span className='detail-ingr-span text-[46px] text-[#b3db61]'>&#11824;</span>
                                        <span>
                                            {recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}</span>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='relative bg-detail mt-[-80px]  z-[-10] pt-[90px] pb-[12px] flex flex-col' >
                    <div className='border-info-extra text-center w-2/3 rounded-box mx-auto my-8 p-10'>
                        <div className='detail-more-info-box flex justify-items-center'>
                            <div className='detail-more-info-content'>
                                <div className='bg-[#b3db61] detail-more-info'>
                                    <ImAccessibility />
                                    <div className='bg-white rounded-full'>4</div>
                                </div>
                            </div>
                            <div className='detail-more-info-content'>
                                <div className='bg-[#b3db61] detail-more-info' >
                                    <FaWeightScale />
                                    <div className='bg-white rounded-full'>600</div>
                                </div>
                            </div>
                            <div className='detail-more-info-content'>
                                <div className='bg-[#b3db61] detail-more-info' >
                                    <FaRegClock />
                                    <div className='bg-white rounded-full'>60'</div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-center my-8">Instructions</h2>
                        <p>{recipe.strInstructions}</p>
                        <div className='detail-finish flex justify-center items-center mt-[120px] text-[#f59d49] text-4xl'>
                            <span><GiKnifeFork /></span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
