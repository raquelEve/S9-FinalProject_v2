import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import RecipePage from '../pages/RecipePage';
import RecipesListPage from '../pages/RecipesListPage';
import WorldRecipesPage from '../pages/WorldRecipesPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';

// import About from '../pages/RecipePage';


function AppRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/global" element={<WorldRecipesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/recipes/:name/:id" element={<RecipesListPage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
}

export default AppRouting;
