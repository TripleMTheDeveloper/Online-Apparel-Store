import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotalPrice, setShowTotalPrice] = useState(false); // State to show/hide total price

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setShowTotalPrice(true); // Show total price when a product is added to the cart
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => { // Loop through each product in the cart
      total += product.price; // Add the price of each product to the total
    });
    setTotalPrice(total); // Update the total price state with the calculated total
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, totalPrice, showTotalPrice, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const TotalPrice = () => {
  const { totalPrice, showTotalPrice } = useContext(CartContext);

  return (
    <div>
      {showTotalPrice && <h2>Total Price: R{totalPrice.toFixed(2)}</h2>}
    </div>
  );
};

export default TotalPrice;









