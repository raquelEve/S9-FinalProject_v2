import React from 'react'
import HeaderComp from '../common/HeaderComponent/HeaderComp'
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp'
import FooterComp from '../common/FooterComponent/FooterComp'
import { AiFillGithub } from "react-icons/ai";
import GithubLink from '../common/githubLink/GithubLink';

export default function AboutPage() {
    return (
        <>
            <HeaderComp></HeaderComp>
            <div className="about-detail">
                <div className='container mx-auto flex justify-between items-end p-6 pb-0'>
                    <div>
                        <h1 className='font-playwriteBold text-2xl mt-14 ml-2 mb-2'>About nyammmmy</h1>
                        <p className='text-[rgb(245,157,73)] font-bold mb-8 ml-2'>
                            Final Project by: Raquel Martínez
                        </p>
                    </div>
                </div>
                <div className='flex justify-between container mx-auto rounded-box bg-white px-8 p-6 shadow-lg'>
                    <div className='w-full p-12'>
                        <h2 className="text-xl font-bold text-center my-8">About nyammmmy</h2>
                        <p className='mb-6 text-center'>

                            <strong>nyammmy</strong> is the final project of Raquel Martínez, student of IT Academy React Bootcamp. This website is currently in its initial Prototype version, offering a vision of what could evolve into a comprehensive recipe platform. In this version, users can search for recipes by main ingredient, countries and categories.
                        </p>
                        <h2 className="text-xl font-bold text-center my-8">Our Mission:</h2>
                        <p className='mb-6 text-center'>
                            The purpose of this website is to provide a complete platform for exploring and discovering delicious recipes from around the world. Built with <strong>React</strong>, it offers functional, visually appealing design using tools like <strong>Vite, React-router-dom, and Tailwind CSS.</strong> The website aims to be a valuable resource, offering a wide variety of recipes.
                        </p>
                        <h2 className="text-xl font-bold text-center my-8">Our Mission</h2>
                        <p className='mb-6 text-center'>
                            <strong>nyammmy</strong>  aims to be a comprehensive resource for food enthusiasts, offering detailed recipes along with ingredient lists, preparation instructions, and nutritional information. Whether you are a beginner cook or a seasoned chef, <strong>nyammmy</strong>  has something to offer you.</p>
                        <h2 className="text-xl font-bold text-center my-8">Meet the Creator</h2>
                        <p className='mb-6 text-center'>
                            <strong>Hey there! I&#39;m Raquel Martinez, the creative mind behind nyammmy.</strong><br /> With a great foundation in web development and a career that explore frontend technologies like Angular and React, I bring a blend of my expertises and a love for culinary arts to <strong>nyammmy</strong>. <br />
                            My journey in the programming world started with DAW, continued with a degree in Multimedia at UOC, where I am still studying, and complemented professional experience as a web developer. Also with the idea of broadening my skill set and deepening my knowledge of modern web technologies, I recently embarked on React IT ACademy course.
                            <br />
                            With <strong>nyammmy</strong> my goal is to combine my technical competence with my culinary love, creating a platform where food enthusiasts can discover, share and enjoy delicious recipes from around the world.

                            Translated with DeepL.com (free version)
                        </p>
                    </div>
                </div>
                <div className='relative bg-detail mt-[-80px] z-[-10] pt-[90px] pb-[12px] flex flex-col'>
                    <div className='border-info-extra text-center w-2/3 rounded-box mx-auto my-8 p-10'>
                        <h2 className="text-xl font-bold text-center my-8">Where to Find Me:</h2>
                        <GithubLink></GithubLink>
                        <a href="https://github.com/raquelEve" target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>
                            Visit my GitHub
                        </a>
                        <p>Join me on this exciting journey where we will explore together the art of cooking and technology!</p>
                    </div>
                    <div className='detail-finish flex justify-center items-center mb-[120px] text-[#f59d49] text-4xl'>
                        <span><AiFillGithub /></span>
                    </div>
                </div>

            </div>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    )
}
