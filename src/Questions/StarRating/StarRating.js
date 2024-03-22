import React, { useState } from "react";

// styles
import "./StarRating.css";

// components
import StarIcon from "./StarIcon/StarIcon";

function StarRating() {
  const [selectedStarId, setSelectedStarId] = useState(-1);

  const handleClick = (starId) => {
    setSelectedStarId(starId);
  };

  return (
    <div className="star-rating-container">
      {Array(5)
        .fill()
        .map((val, index) => (
          <StarIcon
            key={index}
            starId={index}
            handleClick={handleClick}
            selectedStarId={selectedStarId}
          />
        ))}
    </div>
  );
}

export default StarRating;
