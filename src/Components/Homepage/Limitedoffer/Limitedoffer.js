import React from "react";
import './Limitedoffer.css'
import img1 from '../../../Images/car-thumb-1.png'
import { Col, Row } from "react-bootstrap";

const Limitedoffer = () => {
  return (
    <div className="Limited-wrapper">
      <div className="Limited-container">
        <Row>
          <Col xs={12} md={6}>
            <div>
              <h3>Limited time offer</h3>
              <h1>Marcediz Benz Pro 2.0Marcediz Benz Pro 2.0</h1>
              <h4>
                Authoritatively synthesize integrated value through flexible
                metrics. Seamlessly evolve scenarios without customer directed
                channels.
              </h4>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img src={img1} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Limitedoffer;
