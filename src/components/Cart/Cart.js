import React from "react";
import {useCart} from "../../CartContext";
import CartProduct from "./CartProduct";

function Cart() {

    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return <div>El carrito está vacío.</div>;
    }

    return(
        <div>
            {cart.map((product, index) => (
                <CartProduct
                    key={index}
                    Name={product.Name}
                    Image={product.Image}
                    Price={product.Price}
                    Author={product.Author}
                    Description={product.Description}
                    Quantity={product.quantity}
                    Id={product.Id}
                />
            ))}
        </div>
    );

}

export default Cart;