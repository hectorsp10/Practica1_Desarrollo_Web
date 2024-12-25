import React from "react";
import { useCart } from "../../CartContext"

function BtnAddToChart({ product}) {

    const { addToCart } = useCart();

    return(
        <button onClick={() => addToCart(product)} className="btn btn-addtochart">
            Add to chart
        </button>
    )
}

export default BtnAddToChart;