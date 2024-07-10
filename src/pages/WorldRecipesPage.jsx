
import HeaderComp from '../common/HeaderComponent/HeaderComp'
import FooterComp from '../common/FooterComponent/FooterComp'
import areasList from '../data/areasList'
import AreaCard from '../components/AreaCard/AreaCard';

export default function WorldRecipesPage() {
    return (
        <>
            <HeaderComp />
            <main className='container mx-auto mb-16'>
                <h1 className='font-playwriteBold text-2xl mt-14 ml-2 mb-12'>WorldRecipesPage</h1>
                {areasList.map((area) => (
                    <AreaCard area={area} key={area.id}></AreaCard>
                ))}
            </main>
            <FooterComp />
        </>
    )
}
