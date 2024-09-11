import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Styles from '../CSS/Cart.module.css';

const Cart = ({ onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Sushi",
      price: 22.99,
      quantity: 0
    },
    {
      id: 2,
      name: "Schnitzel",
      price: 16.50,
      quantity: 0
    },
  ]);

  const increaseQuantity = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return ReactDOM.createPortal(
    <div className={Styles.overlay} onClick={onClose}>
      <div className={Styles.cart} onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <div className={Styles.itemDetails}>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <div className={Styles.quantityControl}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={Styles.actions}>
          <button className={Styles.cancelButton} onClick={onClose}>Cancel</button>
          <button className={Styles.orderButton}>Order</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Cart;
