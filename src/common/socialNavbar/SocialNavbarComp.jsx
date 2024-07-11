import React from 'react'
import './SocialNavbarComp.css'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

export default function SocialNavbarComp() {
    return (
        <div className='flex justify-end social-nav items-center p-2'>
            <a href='#' className='mx-2'>
                <CiFacebook className='icon' />
            </a>
            <a href='#' className='mx-2'>
                <CiInstagram className='icon insta' />
            </a>
            <a href='#' className='mx-2'>
                <AiOutlinePinterest className='icon' />
            </a>
        </div>
    )
}
