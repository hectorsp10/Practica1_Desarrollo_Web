import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductsDisplay/ProductsDisplay";

function SearchView() {
    return (
        <>
            <Header/>
            <div className="searchView-container">
                <ProductCard />
            </div>
            <Footer/>
        </>
    );
}

export default SearchView;