import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectUser } from '../features/userSlice';
import './ProfilePage.css';
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp';
import HeaderComponent from '../common/HeaderComponent/HeaderComponent';
import FooterComp from '../common/FooterComponent/FooterComp';
import FavoriteRecipeItem from '../components/FavoriteRecipeItem/FavoriteRecipeItem';
import { CiHeart } from "react-icons/ci";

export default function ProfilePage() {
    const user = useSelector(selectUser);
    const [image, setImage] = useState('');

    const [favoriteRecipes, setFavoriteRecipes] = useState([
        { idMeal: '52772', strMeal: 'Teriyaki Chicken Casserole' },
        { idMeal: '53080', strMeal: 'Blini Pancakes' },
        { idMeal: '52849', strMeal: 'Spinach & Ricotta Cannelloni' }
    ]);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://source.unsplash.com/random/?spoon');
                setImage(response.request.responseURL);
            } catch (error) {
                setImage('https://i.pinimg.com/564x/9e/73/0c/9e730ca8a7c463d38703ccc972d1988e.jpg');
                console.error('Error fetching the image', error);
            }
        };
        fetchImage();
    }, []);

    return (
        <>
            <SocialNavbarComp />
            <HeaderComponent />
            <div className='flex justify-center bg-neutral-500 text-white mt-4 p-1 text-center text-xl font-bold'>
                Page account
            </div>
            <div className="profile-container flex flex-col md:flex-row justify-between">
                <div className='profile-info bg-[#eee] w-full md:w-1/4 md:min-h-[450px] flex flex-col shadow-md mr-shadow'>
                    <img src={image} alt="Usuario" className="profile-image" />
                    <h2 className='text-center text-2xl font-bold my-10'>{user ? user.displayName : 'Usuario Anónimo'}</h2>
                </div>

                <div className="favorite-recipes md:w-3/4 flex flex-col mb-[100px]">
                    <h3 className='font-playwriteBold text-2xl mt-6 md:mt-14 ml-2 mb-12 flex justify-center'>
                        <span><CiHeart /></span>Favorite Recipes<span><CiHeart /></span></h3>
                    {favoriteRecipes.map((recipe, index) => (
                        <FavoriteRecipeItem key={index} recipe={recipe} />
                    ))}
                </div>
            </div>
            <SocialNavbarComp />
            <FooterComp />
        </>
    );
}
