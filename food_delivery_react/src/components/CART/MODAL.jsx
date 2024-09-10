
import ReactDOM from 'react-dom';
import Styles from '../CSS/Modal.module.css';

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className={Styles.overlay}>
      <div className={Styles.modal}>
        <h2>Order Item</h2>
        <p>Name: Sushi</p>
        <p>Amount: $22.99</p>
        <div className={Styles.actions}>
          <button className={Styles.cancelButton} onClick={onClose}>Cancel</button>
          <button className={Styles.orderButton}>Order</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
