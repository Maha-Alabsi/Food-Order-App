import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cartcontext';

const HeaderCartButton = ({ onClick }) => {
  const cartData = useContext(CartContext);
  // we want to change the items amount
  const numberOffCartItems = cartData.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOffCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
