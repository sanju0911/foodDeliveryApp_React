
import Styles from '../CSS/MealsList.module.css';  // Optional: if you want to style the list

const MealsList = () => {
  const List = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "A German specialty",
      price: 16.50
    },
    {
      id: 3,
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99
    },
    {
      id: 4,
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99
    }
  ];

  return (
    <div className={Styles.mealsList} >
      {List.map(item => (
        <div key={item.id} className={Styles.mealItem} >
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className={Styles.price}>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default MealsList;
