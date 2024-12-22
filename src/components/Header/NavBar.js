import React from 'react';
import SearchBar from './SearchBar';
import BtnCart from './BtnCart';
import Account from './Account';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <SearchBar />
                <Account />
                <BtnCart />
            </div>
        </nav>
    );
}

export default NavBar;