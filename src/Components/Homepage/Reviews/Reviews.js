import axios from "axios";
import React, { useEffect, useState } from "react";
import reviewImage from '../../../Images/travelers1.png'
import { DynamicStar } from "react-dynamic-star";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Reviews.css";
import Rating from "react-rating";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://car-planet-server.vercel.app/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <div className="review-wrapper">
      <div className="review-container">
        <h2 className="review-title">Top Review</h2>
        <p className="review-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          architecto tempore veritatis tempora. Dolores!{" "}
        </p>

        <div className="review-card-container">
          {reviews.map((review)=>{
            return (
              <div className="review-card" key={review._id}>
                <div className="review-top">
                  <div>
                    <img src={reviewImage} className="reviewer-img" alt="" />
                  </div>
                  <div>
                    <h3 className="reviewer">{review.name}</h3>
                    <h4 className="dynamic-star">
                      <DynamicStar rating={review.rating} width={"15"} />
                    </h4>
                  </div>
                </div>
                <div className="review-bottom">
                  <p>{review.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
