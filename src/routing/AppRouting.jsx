import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import RecipePage from '../pages/RecipePage';
import RecipesListPage from '../pages/RecipesListPage';
import WorldRecipesPage from '../pages/WorldRecipesPage';
import AboutPage from '../pages/AboutPage';

// import About from '../pages/RecipePage';


function AppRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/global" element={<WorldRecipesPage />} />
            {/* <Route path="/recipe" element={<About />} /> */}
            <Route path="/recipes/:name/:id" element={<RecipesListPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
}

export default AppRouting;
