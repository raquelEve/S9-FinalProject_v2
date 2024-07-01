import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/Recipe';

function AppRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<About />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
}

export default AppRouting;
