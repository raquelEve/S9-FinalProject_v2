import React, { useEffect, useState } from 'react';
import './RecipesCarouselList.css';
import latestList from '../../data/latestsList';
import { Link, NavLink } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function RecipesCarouselList() {

    const scrollContainer = React.useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const moveBack = () => {

        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -250, behavior: 'smooth' });
        }
    }
    const moveFront = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
    }
    const updateButtonsState = () => {
        if (scrollContainer.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    useEffect(() => {
        const current = scrollContainer.current;
        if (current) {
            current.addEventListener('scroll', updateButtonsState);
            // Verificar el estado inicial de los botones
            updateButtonsState();
        }
        return () => {
            if (current) {
                current.removeEventListener('scroll', updateButtonsState);
            }
        };
    }, []);

    return (
        <>
            <h2 className="text-center text-2xl font-bold my-10">New Recipes</h2>
            <div className='relative border container mx-auto'>

                <button className='absolute btn-back hidden lg:block'
                    onClick={moveBack}
                    disabled={isAtStart}>
                    <FaArrowAltCircleLeft />
                </button>
                <button
                    className='absolute btn-front hidden lg:block'
                    onClick={moveFront}
                    disabled={isAtEnd}>
                    <FaArrowAltCircleRight />
                </button>
                <div ref={scrollContainer} className='recipes-carousel-list my-6 overflow-x-auto container mx-auto py-4 relative'>
                    {/* ----- */}

                    <div className="carousel rounded-box">
                        {latestList.meals.map((recipe) => (
                            <div key={recipe.idMeal} className="carousel-item w-64 h-100 flex-none mx-2">
                                <div className="card w-full h-full bg-base-100 shadow-xl">
                                    <figure className="">
                                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-full object-cover" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-center h-[60px] table-cell align-top mb-[-5px]">{recipe.strMeal}</h2>
                                        <p className='text-center italic text-gray-500'>{recipe.strCategory}</p>
                                        <p className='text-center mt-[-10px]'>{recipe.strArea}</p>
                                        <Link to={`/recipe/${recipe.idMeal}`} className="btn btn-sm btn-mygreen">
                                            See More +
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
