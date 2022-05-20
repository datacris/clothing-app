import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
    );
  if(existingCartItems){
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1}
      :
      cartItem
      );
  }
  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
    );
  if(existingCartItems.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  return cartItems.map(cartItem => cartItem.id === productToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1}
    :
    cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen : false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=>{},
  removeItemFromCart: ()=>{},
  cartCount: 0,
})

export const CartProvider = ({children}) =>{
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() =>{
    const newCartCount = cartItems.reduce((acc, cartItem) => (acc + cartItem.quantity), 0 )
    setCartCount(newCartCount);
  },[cartItems])

  const addItemToCart =(productToAdd) =>{
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  const removeItemFromCart =(productToRemove) =>{
    setCartItems(removeCartItem(cartItems, productToRemove));
  }
  const clearItemFromCart =(itemToClear) =>{
    setCartItems(clearCartItem(cartItems, itemToClear));
  }
  const value = {
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    removeItemFromCart,
    clearItemFromCart,
    cartItems, 
    cartCount
  };

  return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}