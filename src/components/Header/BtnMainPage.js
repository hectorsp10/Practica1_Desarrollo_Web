import React from 'react';
import {useNavigate} from "react-router-dom";

function BtnMainPage() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/home`);
    };

    return (
        <button className="btn-mainpage" onClick={handleClick}>
            Página principal
        </button>
    );
}

export default BtnMainPage;