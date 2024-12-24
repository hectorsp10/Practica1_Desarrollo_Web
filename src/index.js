import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './styles/main.css'
import './styles/Header/BtnCartStyle.css'
import './styles/Header/NavBarStyle.css'
import './styles/Header/SearchBarStyle.css'
import './styles/Header/AccountStyle.css'
import './styles/Footer/FooterDisplayStyle.css'
import './styles/Footer/Footer.css'
import './styles/ProductDisplay/ProductCardStyle.css'
import './styles/Views/SearchViewStyle.css'
import './styles/SearchFilters/SearchFiltersStyle.css'
import reportWebVitals from './reportWebVitals';
import SearchView from "./views/SearchView";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchView />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
