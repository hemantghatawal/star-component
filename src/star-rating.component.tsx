import { useState } from "react";
import "./star-rating.styles.css";

const StarRating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hovering, setHovering] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const maxRating = 5;

  const clickHandler = (ratingValue: number) => {
    if (ratingValue === rating) {
      setRating(0);
    } else {
      setRating(ratingValue);
    }
  };

  return (
    <>
      <h3>current Rating: {rating}</h3>

      <div className="star-rating-container">
        {[...Array(5)].map((_, idx: number) => {
          const ratingValue = idx + 1;
          return (
            <p
              key={idx}
              className={`star ${
                ratingValue <= (hovering || rating ) ? "active" : ""
              }`}
              onClick={() => clickHandler(ratingValue)}
              onMouseEnter={() => setHovering(ratingValue)}
              onMouseLeave={() => setHovering(0)}
            >
              {"☆"}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
