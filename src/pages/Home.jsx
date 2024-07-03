import React from 'react'
import HeaderComp from '../common/headerComponent/HeaderComp'
import Parallax from '../components/parallaxComp/Parallax'
import Categories from '../components/Categories/Categories'
import RecipesCarouselList from '../components/RecipesCarouselList/RecipesCarouselList'
import InspirationComp from '../components/Inspiration/InspirationComp'

export default function Home() {
    return (
        <>
            <HeaderComp></HeaderComp>
            <Parallax></Parallax>
            <main className='container mx-auto'>
                <InspirationComp></InspirationComp>
                <Categories></Categories>
            </main>
            <RecipesCarouselList></RecipesCarouselList>
        </>
    )
}
