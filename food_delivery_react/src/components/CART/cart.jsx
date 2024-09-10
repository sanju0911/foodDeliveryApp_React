import Styles from "../CSS/CART.module.css";

const CART = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerLeft}>
        <h1>ReactMeals</h1>
      </div>
      <div className={Styles.headerRight}>
        <button className={Styles.cartButton}>
          Cart <span className={Styles.cartValue}>0</span>
        </button>
      </div>
    </header>
  );
}

export default CART;
