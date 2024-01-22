import { Link } from "react-router-dom";

import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./meal-card.css";

const MealCard = ({ meal }) => {
  return (
    <article className="mealCard">
      <div className="mealCardImage">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="mealCardHeader">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="mealCardBodyFooter">
        <p>{meal.description}</p>
        <Link to="/order-online">
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};

export default MealCard;
