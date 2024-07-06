import React from 'react'
import HeaderComp from '../common/headerComponent/HeaderComp'
import Subscribe from '../common/subscribe/Subscribe'
import Parallax from '../components/parallaxComp/Parallax'
import Categories from '../components/CategoriesList/CategoriesList'
import RecipesCarouselList from '../components/RecipesCarouselList/RecipesCarouselList'
import InspirationComp from '../components/Inspiration/InspirationComp'
import FooterComp from '../common/footer/FooterComp'
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp'
import FollowInstagram from '../common/FollowInstagram/FollowInstagram'
import CategoriesList from '../components/CategoriesList/CategoriesList'

export default function Home() {
    console.log("aki 1", import.meta.env.BASE_URL);
    console.log("aki 2", import.meta.env.VITE_BASE_URL);
    console.log("aki 3", import.meta.env.REACT_APP_BASE_URL);
    console.log("123", import.meta.env.VITE_SOME_KEY) // "123"
    return (
        <>
            <HeaderComp></HeaderComp>
            <Parallax></Parallax>
            <main className='container mx-auto'>
                <InspirationComp></InspirationComp>
                <CategoriesList></CategoriesList>
            </main>
            <RecipesCarouselList></RecipesCarouselList>
            <Subscribe></Subscribe>
            <FollowInstagram></FollowInstagram>
            <main className='text-center mt-20 landingText py-8'>
                <p className='w-[80%] md:w-1/2 mx-auto'>
                    <span className='font-playwriteBold '>ñammmy</span>, is  your ultimate destination for discovering delicious and inspiring recipes from around the world.<br />Whether you&apos;re a seasoned chef or just starting your culinary journey, our collection of recipes is designed to suit every skill level and taste preference. Dive into our diverse categories, from mouthwatering breakfasts to hearty dinners and </p>
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    )
}
