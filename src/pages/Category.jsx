import React from 'react'
import HeaderComp from '../common/headerComponent/HeaderComp'
import FooterComp from '../common/footer/FooterComp'

export default function Category() {
    return (
        <>
            <HeaderComp></HeaderComp>
            <main className='xontainer'>
                <h1>Recipe</h1>
            </main>
            <FooterComp></FooterComp>
        </>
    )
}
