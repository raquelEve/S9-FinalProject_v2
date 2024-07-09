import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import AppRouting from './routing/AppRouting';
import RecipeProvider from './context/RecipesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider>
      <Router>
        <AppRouting />
      </Router>
    </RecipeProvider>
  </React.StrictMode>,
)
