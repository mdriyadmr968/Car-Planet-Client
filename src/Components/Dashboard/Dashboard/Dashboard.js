import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import useAuth from "../../../hooks/useAuth";
import { Col, Row } from "react-bootstrap";
import "./dashboard.css";

const Dashboard = () => {
  const {  admin } = useAuth();

  return (
    <div className="dashboard-container">
      <Row>
        <Col sm={12} md={3}>
          <div>
            {!admin && (
              <Sidebar className="dashboard-sidebar">
                <Menu>
                  <MenuItem>
                    <Link to="myOrders">MyOrders</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="reviews">Reviews</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="pay">Pay</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/">Go to Home</Link>
                  </MenuItem>
                </Menu>
              </Sidebar>
            )}
            {admin && (
              <Sidebar className="dashboard-sidebar">
                <Menu>
                  <MenuItem>
                    <Link to="manageAllOrders">Manage All Orders</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="addProduct">Add a CAR</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="makeAdmin">Make Admin</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="manageProducts">Manage all Car</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/">Go to Home</Link>
                  </MenuItem>
                </Menu>
              </Sidebar>
            )}
          </div>
        </Col>
        <Col className="dashboard-content">
          <div>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
