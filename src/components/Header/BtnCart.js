import React from 'react';
import {useNavigate} from "react-router-dom";

function BtnCart() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/cart`);
    };

    return (
        <button className="btn-cart" onClick={handleClick}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" />
        </button>
    );
}

export default BtnCart;