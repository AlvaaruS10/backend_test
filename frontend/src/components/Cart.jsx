import React, { useState } from 'react'
import { pizzaCart } from '../pizzas'
import styles from '../Cart.module.css'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const increment = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
    setCart(updatedCart)
  };

  const decrement = (id) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, count: item.count > 1 ? item.count - 1 : 0 } : item
    ).filter(item => item.count > 0)
    setCart(updatedCart)
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0)

  return (
    <div className={styles.cart}>
      {cart.map(item => (
        <div key={item.id} className={styles.item}>
          <img src={item.img} alt={item.name} className={styles.image} />
          <div className={styles.details}>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.price}>Precio: ${item.price.toLocaleString()}</p>
            <p className={styles.count}>Cantidad: {item.count}</p>
            <div className={styles.buttons}>
              <button onClick={() => increment(item.id)} className={styles.button}>+</button>
              <button onClick={() => decrement(item.id)} className={styles.button}>-</button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <p>🛒Total: ${total.toLocaleString()}</p>
        <button className={styles.payButton}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart 
