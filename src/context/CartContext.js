
import { createContext, useContext, useState } from "react";


export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context;
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartItems, setCartItems] = useState(0);

    const addItem = (item) => {
        if (cart.find(cartItem => cartItem.id === item.id)) {
            /* actualizar carrito si el item ya existe. */
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        cantidad: cartItem.cantidad + item.cantidad,
                        subtotal: cartItem.subtotal + item.subtotal
                    }
                }
                return cartItem;
            })
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
            setCartItems(cartItems + 1);
        }

        // calcular total
        setCartTotal(cartTotal + item.subtotal);

    }

    const removeItem = (item) => {
      
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
        setCartTotal(cartTotal - item.subtotal);
        setCartItems(cartItems - 1);
    }

    const clearCart = () => {
        setCart([]);
        setCartTotal(0);
        setCartItems(0);
    }


    return (
        <CartContext.Provider value={{
            cart,
            cartTotal,
            cartItems,
            addItem,
            removeItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}