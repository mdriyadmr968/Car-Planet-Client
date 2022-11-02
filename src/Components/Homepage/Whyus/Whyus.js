import { faHandSparkles, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./Whyus.css";

const Whyus = () => {
  return (
    <div className="whus-wrapper">
      <div className="whyus-container">
        <div className="whyus-header">
          <h4>Why Choose Us</h4>
          <h1>Why Choose Us CarPlanet</h1>
          <h5>
            Dynamically unleash market positioning convergence for scalable
            infrastructures Rapidiously virtual infrastructures rather than
            market-driven action items.
          </h5>
        </div>
        <div>
          <Row>
            <Col sm={12} md={4}>
              <Card className="whyus-card-container">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="whyus-card-icon"
                />
                <Card.Body>
                  <Card.Title className="whyus-card-title">
                    <h4>Many Pickup Location</h4>
                  </Card.Title>
                  <Card.Text className="whyus-card-desc">
                    <h6>
                      Enthusiastically magnetic initiatives with cross-platform
                      sources. Dynamically target testing procedures through
                      effective.
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card className="whyus-card-container">
                <FontAwesomeIcon
                  icon={faHandSparkles}
                  className="whyus-card-icon"
                />
                <Card.Body>
                  <Card.Title className="whyus-card-title">
                    <h4>Many Pickup Location</h4>
                  </Card.Title>
                  <Card.Text className="whyus-card-desc">
                    <h6>
                      Enthusiastically magnetic initiatives with cross-platform
                      sources. Dynamically target testing procedures through
                      effective.
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4}>
              <Card className="whyus-card-container">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="whyus-card-icon"
                />
                <Card.Body>
                  <Card.Title className="whyus-card-title">
                    <h4>Many Pickup Location</h4>
                  </Card.Title>
                  <Card.Text className="whyus-card-desc">
                    <h6>
                      Enthusiastically magnetic initiatives with cross-platform
                      sources. Dynamically target testing procedures through
                      effective.
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
