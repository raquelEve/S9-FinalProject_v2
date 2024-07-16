import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import AppRouting from './routing/AppRouting';
import RecipeProvider from './context/RecipesContext';
import { Provider } from 'react-redux';
import { store } from "./store/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RecipeProvider>
        <Router>
          <AppRouting />
        </Router>
      </RecipeProvider>
    </Provider>
  </React.StrictMode>,
)
