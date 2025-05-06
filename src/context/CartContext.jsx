import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export function CartProvider({children}){
  const [cartItems, setCartItems]=useState([]);
  const clearCart = () => {
    setCartItems([]);
  };
  

  const addToCart = (movie) => {
    if (!cartItems.some((item) => item.id === movie.id)) {
      setCartItems((prev) => [...prev, movie]);
    }
  };

  const removeFromCart=(id)=>{
    setCartItems((prev)=>prev.filter((item)=>item.id!==id));
  };

  const getTotalPrice=()=>{
    return cartItems.reduce((sum,item)=>sum+(item.price||0),0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  return useContext(CartContext);
}

