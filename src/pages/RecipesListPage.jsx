import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderComponent from '../common/HeaderComponent/HeaderComponent';
import FooterComp from '../common/FooterComponent/FooterComp';
import { RecipeContext } from '../context/RecipesContext';
import RecipeListComp from '../components/recipeListComp/RecipeListComp';
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp';

export default function RecipesListPage() {
    const { name, id } = useParams();
    console.log("name", name);
    console.log("id", id);
    const { recipeList, getRecipeListByCategory, getRecipeListByArea } = useContext(RecipeContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (name === 'category') {
            setLoading(true);
            console.log(`Fetching recipe with category: ${id}`);
            getRecipeListByCategory(id).then(() => setLoading(false));
        }
        if (name == 'area') {
            setLoading(true);
            console.log(`Fetching recipe with category: ${id}`);
            getRecipeListByArea(id).then(() => setLoading(false));
        }
    }, [name, id,]);

    if (loading) {
        return (
            <div className='h-[100%] w-full flex justify-center items-center'>
                <span className="loading loading-ball loading-xs"></span>
            </div>
        );
    }

    if (!recipeList || recipeList.length === 0) {
        return <div>No recipe found.</div>;
    }

    return (
        <>
            <HeaderComponent />
            <main className='container p-4 md:p-0 mx-auto mb-16'>
                <h1 className='text-2xl mt-14 mb-12'>
                    <span className='font-bold'>{name}</span>:
                    <spann className="font-playwriteBold ml-4">{id}</spann>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {recipeList.map((recipe) => (

                        <RecipeListComp recipe={recipe} key={recipe.idMeal}></RecipeListComp>
                    ))}
                </div>

            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp />
        </>
    );
}
