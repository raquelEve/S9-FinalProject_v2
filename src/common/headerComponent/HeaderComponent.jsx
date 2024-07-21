import React, { useState } from 'react';
import './HeaderComp.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiLogin, CiLogout } from "react-icons/ci";
import { logoutUser, selectUser } from '../../features/userSlice';
import logo from '../../assets/logo.jpg';

export default function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser); // Asegúrate de que selectUser esté apuntando a state.user.user

    const showRecipesLink = location.pathname.includes('/recipes/');
    const showRecipeLink = location.pathname.includes('/recipe/');
    const showProfileLink = location.pathname.includes('/profile');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <>
            <div className='flex justify-end bg-neutral-700 text-white'>
                {user ? (
                    <button onClick={handleLogout} className='text-[30px] cursor-pointer hover:text-[#f59d49] mr-[20px]'><CiLogout /></button>
                ) : (
                    <button onClick={handleLogin} className='text-[30px] cursor-pointer hover:text-[#f59d49] mr-[12px]'><CiLogin /></button>
                )}
            </div>
            <header className='relative'>

                <div className='flex justify-center text-5xl mt-4 mb-[48px] relative' id='logo'>
                    <img src={logo} alt="logo" className='h-[100px] md:h-[200px] w-auto' />
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
                        {showProfileLink && (
                            <NavLink
                                to='/profile'
                                className={({ isActive }) => `w-full md:w-auto text-center border-b-[1px] border-slate-400 md:border-b-0 header-nav-link p-3 ${isActive ? 'active' : ''}`}
                            >
                                Profile
                            </NavLink>
                        )}
                    </nav>
                </div>
            </header>
        </>
    );
}
