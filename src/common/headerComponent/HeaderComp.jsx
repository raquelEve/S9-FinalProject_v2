import React from 'react'
import './HeaderComp.css'

import facebook from '../../assets/social/facebook.svg'
import instagram from '../../assets/social/instagram.svg'
import pinterest from '../../assets/social/pinterest.svg'
import SocialNavbarComp from '../socialNavbar/SocialNavbarComp'
import { Link, NavLink } from 'react-router-dom'
import './HeaderComp.css'
import logo from '../../assets/logo.jpg'
import logo2 from '../../assets/logo2.jpg'

export default function HeaderComp() {

    return (
        <header>
            <SocialNavbarComp></SocialNavbarComp>

            <div className='flex justify-center font-playwriteBold text-5xl mt-4 mb-[48px] ' id='logo'>
                {/* nyammmy */}
                <img src={logo2} alt="logo" className='h-[180px]' />
            </div>
            <div className="border border-x-0  border-slate-700 border-solid by-1 py-3">
                <nav className="flex justify-center w-[300px]mx-auto text-slate-700">
                    <NavLink to='/home' className='mx-3'>Home</NavLink>
                    <NavLink to='/global' className='mx-3'>World Recipes</NavLink>
                    <NavLink to='/about' className='mx-3'>About</NavLink>
                </nav>
            </div>
        </header>
    )
}
