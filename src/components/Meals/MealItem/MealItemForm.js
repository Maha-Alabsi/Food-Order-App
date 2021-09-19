import { useContext } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/Cartcontext';

// to add meals to the meals list
const MealItemForm = props => {
  const submitHandler = event => {
    event.preventDefault();
  };

  const MealData = useContext(CartContext);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={MealData.addItem}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
