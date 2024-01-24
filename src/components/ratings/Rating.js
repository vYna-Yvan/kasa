import React, { useEffect, useState } from "react";
import star_active from "../../assets/icone/star-active.svg";
import star_inactive from "../../assets/icone/star-inactive.svg";

const Rating = (props) => {
  const { rating } = props;
  const [stars, setStars] = useState([]);
  useEffect(() => {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < parseInt(rating)) {
        starArray.push("active");
      } else {
        starArray.push("inactive");
      }
    }

    setStars(starArray);
  }, [rating]);
  return (
    <div className="rating">
      {stars.map((star, i) => (
        <img
          className="stars"
          key={i}
          alt={star}
          src={star === "active" ? star_active : star_inactive}
        />
      ))}
    </div>
  );
};

export default Rating;
