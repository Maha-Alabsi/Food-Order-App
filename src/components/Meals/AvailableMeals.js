import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from './../../fixed values/DUMMY_MEALS.js';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
