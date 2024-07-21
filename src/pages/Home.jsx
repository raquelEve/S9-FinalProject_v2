import HeaderComponent from '../common/HeaderComponent/HeaderComponent'
import Subscribe from '../common/subscribe/Subscribe'
import Parallax from '../components/parallaxComp/Parallax'
import RecipesCarouselList from '../components/RecipesCarouselList/RecipesCarouselList'
import InspirationComp from '../components/Inspiration/InspirationComp'
import FooterComp from '../common/FooterComponent/FooterComp'
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp'
import FollowInstagram from '../common/FollowInstagram/FollowInstagram'
import CategoriesList from '../components/CategoriesList/CategoriesList'

export default function Home() {

    return (
        <>
            <SocialNavbarComp></SocialNavbarComp>
            <HeaderComponent></HeaderComponent>
            <Parallax></Parallax>
            <main className='container mx-auto px-4 md:px-0'>
                <InspirationComp></InspirationComp>
                <CategoriesList></CategoriesList>
            </main>
            <RecipesCarouselList></RecipesCarouselList>
            <Subscribe></Subscribe>
            <FollowInstagram></FollowInstagram>
            <main className='text-center mt-20 landingText py-8 mx-auto'>
                <p className='w-[80%] md:w-1/2 mx-auto'>
                    <span className='font-playwriteBold '>nyammmy</span>, is  your ultimate destination for discovering delicious and inspiring recipes from around the world.<br />Whether you&apos;re a seasoned chef or just starting your culinary journey, our collection of recipes is designed to suit every skill level and taste preference. Dive into our diverse categories, from mouthwatering breakfasts to hearty dinners and </p>
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp></FooterComp>
        </>
    )
}
