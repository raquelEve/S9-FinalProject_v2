
import HeaderComponent from '../common/HeaderComponent/HeaderComponent'
import FooterComp from '../common/FooterComponent/FooterComp'
import areasList from '../data/areasList'
import AreaCard from '../components/AreaCard/AreaCard';
import SocialNavbarComp from '../common/socialNavbar/SocialNavbarComp';

export default function WorldRecipesPage() {
    return (
        <>
            <SocialNavbarComp></SocialNavbarComp>
            <HeaderComponent></HeaderComponent>
            <main className='container mx-auto mb-16'>
                <h1 className='font-playwriteBold text-2xl mt-14 ml-2 mb-12 text-center md:text-left'>
                    Recipes from around the World</h1>
                {areasList.map((area) => (
                    <AreaCard area={area} key={area.id}></AreaCard>
                ))}
            </main>
            <SocialNavbarComp></SocialNavbarComp>
            <FooterComp />
        </>
    )
}
