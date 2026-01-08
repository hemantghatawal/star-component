import { useCallback, useEffect, useState } from "react";
import "./star-rating.styles.css";

const StarRating = ({
  maxRating = 5,
  onChange,
}: {
  maxRating?: number;
  onChange: (rating: number) => void;
}) => {
  const [currentRating, setCurrentRating] = useState<number>(0);
  const [hovering, setHovering] = useState<number>(0);

  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);
  const clickHandler = useCallback(
    (ratingValue: number) => {
      if (ratingValue === currentRating) {
        setCurrentRating(0);
      } else {
        setCurrentRating(ratingValue);
      }
    },
    [currentRating]
  );

  return (
    <>
      <h3>current Rating: {currentRating}</h3>

      <div className="star-rating-container">
        {[...Array(maxRating)].map((_, idx: number) => {
          const ratingValue = idx + 1;
          return (
            <p
              key={idx}
              className={`star ${
                ratingValue <= (hovering || currentRating) ? "active" : ""
              }`}
              onClick={() => clickHandler(ratingValue)}
              onMouseEnter={() => setHovering(ratingValue)}
              onMouseLeave={() => setHovering(0)}
            >
              &#9733;
            </p>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
