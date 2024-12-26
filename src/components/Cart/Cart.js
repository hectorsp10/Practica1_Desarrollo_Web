import React from "react";
import {useCart} from "../../contexts/CartContext";
import CartProduct from "./CartProduct";

function Cart() {

    const { cart } = useCart();

    if (cart.length === 0) {
        return <div>El carrito está vacío.</div>;
    }

    const totalAmmount = cart.reduce((sum, product) => sum + Number(product.Price)*product.quantity, 0);

    return(
        <div>
            <div className="cart-header">
                <div className="row cart-row2">
                    <h2>Cesta</h2>
                </div>
                <div className="row cart-row2">
                    <p className="text-end cart-header-pricetext">Precio</p>
                </div>
            </div>
            {cart.map((product, index) => (
                <CartProduct
                    product={product}
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
            <div className="cart">
                <p>{totalAmmount}</p>
            </div>
        </div>
    );

}

export default Cart;