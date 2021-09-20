import classes from './Cart.module.css';
import DUMMY_MEALS from './../../fixed values/DUMMY_MEALS.js';
import Modal from '../UI/Modal';

const Cart = ({ onHideCart }) => {
  const cartitems = (
    <ul className={classes['cart-items']}>
      {DUMMY_MEALS.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    // the cart it will be in the modal
    <Modal onClickBack={onHideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.2</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
