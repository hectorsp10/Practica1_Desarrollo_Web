import React from "react";
import {useCart} from "../../CartContext";

function Cart() {

    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return <div>El carrito está vacío.</div>;
    }

    // Agrupar productos repetidos y mostrar uno solo por id con su cantidad
    const uniqueProducts = cart.reduce((acc, product) => {
        // Verificar si el producto ya está en el array acumulador
        const existingProduct = acc.find(item => item.id === product.id);
        if (existingProduct) {
            // Si el producto ya está en el carrito, aumentamos la cantidad
            existingProduct.quantity += 1;
        } else {
            // Si no está, lo agregamos al carrito con cantidad 1
            acc.push({ ...product, quantity: 1 });
        }
        return acc;
    }, []);

    return(
        <div>
            <ul>
                {uniqueProducts.map((product, index) => (

                    <img
                        src={product.Image}
                        alt={product.Name}
                        style={{width: "100px", marginRight: "10px"}}
                    />
            ))}
            </ul>
        </div>
    );
}

export default Cart;