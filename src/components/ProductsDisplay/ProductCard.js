import React from 'react';

function ProductCard({Name, Image, Price}) {
    return (
        <div className="productcard-container">
            <div className="row m-3">
                <div className="col">
                    <h5 className="productcard-Name">{Name}</h5>
                    <img className="productcard-image" src={Image} alt={"product image"}/>
                </div>
                <div className="col">
                    <p>{Price}€</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;