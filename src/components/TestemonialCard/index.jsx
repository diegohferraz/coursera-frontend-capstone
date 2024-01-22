import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./testimonial-card.css";

const ratingLevels = { 0.5: faStarHalfStroke, 1: faStar };

const TestimonialCard = ({ testemonial }) => {
  return (
    <article className="testimonialCard">
      <img src={testemonial.image} alt={testemonial.fullName} />
      <h4>{testemonial.fullName}</h4>
      <span>
        {testemonial.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="xs"
          />
        ))}
      </span>
      <blockquote>
        <p>"{testemonial.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
