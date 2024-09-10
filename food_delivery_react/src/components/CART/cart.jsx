import React from 'react';
import ReactDOM from 'react-dom';
import Styles from '../CSS/Cart.module.css';

const Cart = ({ onClose }) => {
  const items = [
    {
      id: 1,
      name: "Sushi",
      price: 22.99,
      dateAdded: "2024-09-10"
    },
    {
      id: 2,
      name: "Schnitzel",
      price: 16.50,
      dateAdded: "2024-09-11"
    },
  ];

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
                <span>{item.dateAdded}</span>
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
