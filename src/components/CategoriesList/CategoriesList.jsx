import React from 'react'
import './Categories.css';
import cat1Image from '../../assets/cat_1.jpg';

export default function Categories() {
    return (
        <>
            <div id="categories1">
                <h2 className="text-center text-2xl font-bold my-10">Popular Categories</h2>
                <div className='categ-content-list m-5 grid grid-cols-3 justify-items-center md:flex md:place-content-between'>
                    {/* category */}
                    <div className='category-box flex flex-col my-4'>
                        <a href='#' className='categ-link'>
                            <div className='overflow-hidden border rounded-full'>
                                <div className="bg-img max-h-full max-w-full  h-[80px] w-[80px] md:h-[120px] md:w-[120px] transition-transform duration-300"></div>
                            </div>
                            <h2 className='text-center mt-4'>Breakfast</h2>
                        </a>
                    </div>
                    {/* end category */}
                    {/* category */}
                    <div className='category-box flex flex-col my-4'>
                        <a href='#' className='categ-link'>
                            <div className='overflow-hidden border rounded-full'>
                                <div className="bg-img max-h-full max-w-full  h-[80px] w-[80px] md:h-[120px] md:w-[120px] transition-transform duration-300"></div>
                            </div>
                            <h2 className='text-center mt-4'>Breakfast</h2>
                        </a>
                    </div>
                    {/* end category */}
                    {/* category */}
                    <div className='category-box flex flex-col my-4'>
                        <a href='#' className='categ-link'>
                            <div className='overflow-hidden border rounded-full'>
                                <div className="bg-img max-h-full max-w-full  h-[80px] w-[80px] md:h-[120px] md:w-[120px] transition-transform duration-300"></div>
                            </div>
                            <h2 className='text-center mt-4'>Breakfast</h2>
                        </a>
                    </div>
                    {/* end category */}
                    {/* category */}
                    <div className='category-box flex flex-col my-4'>
                        <a href='#' className='categ-link'>
                            <div className='overflow-hidden border rounded-full'>
                                <div className="bg-img max-h-full max-w-full  h-[80px] w-[80px] md:h-[120px] md:w-[120px] transition-transform duration-300"></div>
                            </div>
                            <h2 className='text-center mt-4'>Breakfast</h2>
                        </a>
                    </div>
                    {/* end category */}
                    {/* category */}
                    <div className='category-box flex flex-col my-4'>
                        <a href='#' className='categ-link'>
                            <div className='overflow-hidden border rounded-full'>
                                <div className="bg-img max-h-full max-w-full  h-[80px] w-[80px] md:h-[120px] md:w-[120px] transition-transform duration-300"></div>
                            </div>
                            <h2 className='text-center mt-4'>Breakfast</h2>
                        </a>
                    </div>
                    {/* end category */}
                    {/* category */}
                    <div className='category-box flex flex-col my-4'>
                        <a href='#' className='categ-link'>
                            <div className='overflow-hidden border rounded-full'>
                                <div className="bg-img max-h-full max-w-full  h-[80px] w-[80px] md:h-[120px] md:w-[120px] transition-transform duration-300"></div>
                            </div>
                            <h2 className='text-center mt-4'>Breakfast</h2>
                        </a>
                    </div>
                    {/* end category */}
                </div>
            </div>

        </>
    )
}