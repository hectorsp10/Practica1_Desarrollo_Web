import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //localStorage.clear();

    // cargar carrito desde local storage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (Array.isArray(savedCart)) {
            setCart(savedCart);
        } else {
            setCart([]); // Si no hay datos válidos, inicializa como un array vacío
        }
    }, []);

    const addToCart = (product) => {

        // Verificamos si el producto ya existe en el carrito
        const productIndex = cart.findIndex(item => item.id === product.id);

        if (productIndex >= 0) {
            // Si el producto ya está en el carrito, actualizamos la cantidad
            const updatedCart = [...cart];
            updatedCart[productIndex].quantity += 1;
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            // Si no está en el carrito, lo añadimos con cantidad 1
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    }

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    return (
        <CartContext.Provider value = {{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
};