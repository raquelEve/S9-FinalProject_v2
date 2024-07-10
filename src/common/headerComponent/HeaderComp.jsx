import React from 'react'
import './HeaderComp.css'

import facebook from '../../assets/social/facebook.svg'
import instagram from '../../assets/social/instagram.svg'
import pinterest from '../../assets/social/pinterest.svg'
import SocialNavbarComp from '../socialNavbar/SocialNavbarComp'
import { Link, NavLink } from 'react-router-dom'

export default function HeaderComp() {



    return (
        <header>
            <SocialNavbarComp></SocialNavbarComp>

            <div className='flex justify-center font-playwriteBold text-5xl mt-4 mb-[48px] ' id='logo'>
                nyammmy
            </div>
            <div className="border border-x-0  border-slate-700 border-solid by-1 py-3">
                <nav className="flex justify-center w-[300px]mx-auto text-slate-700">
                    <NavLink to='/home' className='mx-3'>Home</NavLink>
                    <NavLink to='/global' className='mx-3'>World Recipes</NavLink>
                    <NavLink to='/about' className='mx-3'>Link</NavLink>
                </nav>
            </div >
        </header >
    )
}
