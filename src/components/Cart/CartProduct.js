import React from "react"
import BtnAddToChart from "../Shared/BtnAddToChart";

function CartProduct({Id, Description, Name, Image, Price, Author, Quantity}) {
    return (
        <div className="cartproduct-container row">
            <div className="col-lg-3 col-md-6">
                <img className="cartproduct-image" src={Image} alt="product image"/>
            </div>
            <div className="col-lg-6 col-md-12">
                <h3>{Name}</h3>
                <p>{Author}</p>
                <p>Price: {Price}€</p>
                <p>{ Description }</p>
                <p>{ Quantity }</p>
            </div>
        </div>
    );
}

export default CartProduct;