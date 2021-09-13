import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from './../../fixtures/DUMMY_MEALS.js'
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
