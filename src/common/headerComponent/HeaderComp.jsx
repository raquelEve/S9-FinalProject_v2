import React, { useState } from 'react';
import './HeaderComp.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo2 from '../../assets/logo2.jpg';

export default function HeaderComp() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const showRecipesLink = location.pathname.includes('/recipes/');
    const showRecipeLink = location.pathname.includes('/recipe/');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className='flex justify-center text-5xl mt-4 mb-[48px] relative' id='logo'>
                <img src={logo2} alt="logo" className='h-[100px] md:h-[180px]' />
                <button className='absolute top-[-22px] right-[20px] md:hidden text-3xl' onClick={toggleMenu}>
                    {menuOpen ? 'X' : '☰'}
                </button>
            </div>
            <div className={`border border-x-0 border-slate-700 border-solid by-1 overflow-hidden md:overflow-visible ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
                <nav className="flex flex-col md:flex-row justify-center mx-auto text-slate-700">
                    <NavLink
                        to='/home'
                        className={({ isActive }) => `w-full md:w-auto text-center border-b-[1px] border-slate-400 md:border-b-0 header-nav-link p-3 ${isActive ? 'active' : ''}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/global'
                        className={({ isActive }) => `w-full md:w-auto text-center border-b-[1px] border-slate-400 md:border-b-0 header-nav-link p-3 ${isActive ? 'active' : ''}`}
                    >
                        World Recipes
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => `w-full md:w-auto text-center border-b-[1px] border-slate-400 md:border-b-0 header-nav-link p-3 ${isActive ? 'active' : ''}`}
                    >
                        About
                    </NavLink>
                    {showRecipesLink && (
                        <NavLink
                            to='/recipes'
                            className={({ isActive }) => `w-full md:w-auto text-center border-b-[1px] border-slate-400 md:border-b-0 header-nav-link p-3 ${isActive ? 'active' : ''}`}
                        >
                            Recipe List
                        </NavLink>
                    )}
                    {showRecipeLink && (
                        <NavLink
                            to='/recipe'
                            className={({ isActive }) => `w-full md:w-auto text-center border-b-[1px] border-slate-400 md:border-b-0 header-nav-link p-3 ${isActive ? 'active' : ''}`}
                        >
                            Recipe
                        </NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
}
