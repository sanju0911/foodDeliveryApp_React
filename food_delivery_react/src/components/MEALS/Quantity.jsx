import Styles from '../CSS/Quantity.module.css';

const Quantity = () => {
  return (
    <div className={Styles.quantityContainer}>
      <p>Quantity: <span className={Styles.quantityNumber}>0</span></p>
      <button className={Styles.addButton}>Add</button>
    </div>
  );
}

export default Quantity;