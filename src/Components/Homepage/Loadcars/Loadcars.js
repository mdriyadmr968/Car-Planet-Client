import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Loadcars.css";

const Loadcars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("https://hidden-eyrie-12216.herokuapp.com/allCars")

      .then((res) => setCars(res.data.slice(0, 6)));
  }, []);
  return (
    <>
      <div className="loadcar-wrapper"> 
        <div className="loadcar-container">
          <h2 className="loadcar-header">
            <h1> Buy Your Dream Car</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores cum consectetur quod nostrum et totam recusandae ducimus voluptate quibusdam.
            </h5>
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {cars.map((car) => {
              return (
                <div className="col " key={car._id} id="loadcars">
                  <div className="card">
                    <div className="cardsimage">
                      <img
                        src={car.img}
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{car.name}</h4>
                      <h5 className="card-title my-2"> ${car.price}</h5>
                      <p className="card-text text-wrap">{(car.desc).slice(0,100)}</p>
                      <Link to={`/purchase/${car._id}`}>
                        <button className="w-30 px-3 py-2 btn btn-dark">
                          Purchase now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loadcars;
