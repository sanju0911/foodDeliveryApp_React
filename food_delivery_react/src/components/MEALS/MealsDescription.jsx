
import Styles from '../CSS/MealsDescription.module.css';
import Listcss from "../CSS/MealsList.module.css";
import MealsList from './MealsList';

const MealsDescription = () => {
  return (
    <>
      <div className={Styles.mealsDescription}>
        <h1>Delicious Food, Delivered To You</h1>
        <h3>Order your Meals from the list</h3>
        <h3>We maintain high quality and taste</h3>
      </div>
      <div className={Listcss.MealsList}>
        <MealsList></MealsList>
       </div>
    </>
  );
}

export default MealsDescription;
