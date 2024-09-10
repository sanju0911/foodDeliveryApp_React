import React, { useState } from 'react';
import Styles from '../CSS/header.module.css';
import Cart from './cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onClose={closeCartHandler} />}
      <header className={Styles.header}>
        <div className={Styles.headerLeft}>
          <h1>ReactMeals</h1>
        </div>
        <div className={Styles.headerRight}>
          <button className={Styles.cartButton} onClick={openCartHandler}>
            Cart <span className={Styles.cartValue}>0</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
