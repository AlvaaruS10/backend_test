import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const increment = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, count: item.count + 1 } : item);
    setCart(updatedCart);
  };

  const decrement = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, count: item.count > 1 ? item.count - 1 : 0 } : item
    ).filter(item => item.count > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, increment, decrement, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

