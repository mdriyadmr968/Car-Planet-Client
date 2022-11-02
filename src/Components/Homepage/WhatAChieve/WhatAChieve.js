import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./WhatAChieve.css";


const WhatAChieve = () => {
  return (
    <div className="achievement-wrapper">
      <div className="achievement-container">
        <h1>What Have We Achieved</h1>
        <p>REAL FIGURES</p>
        <div>   
          <div className="number-container">
            <div className="single-Achievement">
              <div className="round">
                <FontAwesomeIcon icon={faCar} className="achievement-icon" />
                <h1>4500</h1>
              </div>
              <div>
                <h2 className="acheivement-title">Vehicle In Stock</h2>
              </div>
            </div>
            <div className="single-Achievement">
              <div className="round">
                <FontAwesomeIcon icon={faCar} className="achievement-icon" />
                <h1>4500</h1>
              </div>
              <div>
                <h2 className="acheivement-title">Vehicle In Stock</h2>
              </div>
            </div>
            <div className="single-Achievement">
              <div className="round">
                <FontAwesomeIcon icon={faCar} className="achievement-icon" />
                <h1>4500</h1>
              </div>
              <div>
                <h2 className="acheivement-title">Vehicle In Stock</h2>
              </div>
            </div>
            <div className="single-Achievement">
              <div className="round">
                <FontAwesomeIcon icon={faCar} className="achievement-icon" />
                <h1>4500</h1>
              </div>
              <div>
                <h2 className="acheivement-title">Vehicle In Stock</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAChieve;
