import React from 'react';
import './HeaderComp.css';
import facebook from '../../assets/social/facebook.svg';
import instagram from '../../assets/social/instagram.svg';
import pinterest from '../../assets/social/pinterest.svg';
import SocialNavbarComp from '../socialNavbar/SocialNavbarComp';
import { NavLink, useLocation } from 'react-router-dom';
import logo2 from '../../assets/logo2.jpg';

export default function HeaderComp() {

    const showRecipesLink = location.pathname.includes('/recipes/');
    const showRecipeLink = location.pathname.includes('/recipe/');


    return (
        <header>
            <SocialNavbarComp></SocialNavbarComp>
            <div className='flex justify-center font-playwriteBold text-5xl mt-4 mb-[48px]' id='logo'>
                <img src={logo2} alt="logo" className='h-[180px]' />
            </div>
            <div className="border border-x-0 border-slate-700 border-solid by-1">
                <nav className="flex justify-center mx-auto text-slate-700">
                    <NavLink
                        to='/home'
                        className={({ isActive }) => (isActive ? 'header-nav-link active p-3' : 'header-nav-link p-3')}>
                        Home
                    </NavLink>
                    <NavLink
                        to='/global'
                        className={({ isActive }) => (isActive ? 'header-nav-link active p-3' : 'header-nav-link p-3')}>
                        World Recipes
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? 'header-nav-link active p-3' : 'header-nav-link p-3')}>
                        About
                    </NavLink>
                    {showRecipesLink && (
                        <NavLink to='/recipes'
                            className={({ isActive }) => isActive ? 'active py-3' : 'p-3'}>
                            Recipe List
                        </NavLink>
                    )}
                    {showRecipeLink && (
                        <NavLink to='/recipe'
                            className={({ isActive }) => isActive ? 'active py-3' : 'p-3'}>
                            Recipe
                        </NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
}
