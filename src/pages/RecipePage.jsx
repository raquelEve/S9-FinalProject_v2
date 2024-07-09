import React, { useContext, useEffect } from 'react'
import HeaderComp from '../common/headerComponent/HeaderComp'
import FooterComp from '../common/footer/FooterComp'
import RecipeDetail from '../components/recipeDetail/RecipeDetail'
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipesContext';
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp';


export default function RecipePage() {
    const { id } = useParams();
    const { recipe, getRecipeById } = useContext(RecipeContext);

    useEffect(() => {
        if (id) {
            console.log(`Fetching recipe with ID: ${id}`);
            getRecipeById(id);
            recipe
        }
    }, [id, recipe]);



    return (
        <>
            <HeaderComp></HeaderComp>
            <main className='mx-auto'>
                <RecipeDetail recipe={recipe}></RecipeDetail>
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    )
}
