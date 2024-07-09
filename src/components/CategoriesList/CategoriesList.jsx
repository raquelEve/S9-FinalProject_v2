import React from 'react';
import './Categories.css';
import categoriesNameList from '../../data/categoriesdbList';
import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <>
            <div id="categories1">
                <h2 className="text-center text-2xl font-bold my-10">Popular Categories</h2>
                <div className='categ-content-list m-5 grid grid-cols-3 justify-items-center md:flex md:place-content-between md:flex-wrap'>
                    {/* Iterating over categories */}
                    {categoriesNameList.categories.map(category => (
                        <div key={category.idCategory} className='category-box flex flex-col my-4'>
                            <p>{category.strCategoryThum}</p>
                            <Link to={`/recipes/category/${category.strCategory}`} className='categ-link'>
                                <div className='overflow-hidden border rounded-full'>
                                    {/* Background image */}
                                    <div
                                        className="bg-img max-h-full max-w-full  h-[80px] w-[80px] md:h-[120px] md:w-[120px] transition-transform duration-300"
                                        style={{
                                            backgroundImage: `url(${category.strCategoryThumb})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center',
                                            transition: 'transform 1.2s'
                                        }}
                                    />
                                </div>
                                {/* Category name */}
                                <h2 className='text-center mt-4'>{category.strCategory}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
