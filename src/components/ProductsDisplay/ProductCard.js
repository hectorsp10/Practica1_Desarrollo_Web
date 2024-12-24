import React from 'react';

function ProductCard({Name, Image, Price, Author}) {
    return (
        <div className="productcard-container">
            <div className="row m-3">
                <div className="productcard-image-container">
                    <img className="productcard-image" src={Image} alt={"product image"}/>
                </div>
                <h5 className="productcard-name mb-0">{Name}</h5>
                <p className="productcard-author">{Author}</p>
                <p>{Price}€</p>
            </div>
        </div>
    );
}

export default ProductCard;