import React from "react";
import { Col, Row } from "react-bootstrap";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <Row>
        <Col sm={12} md={3}>
          <div>
            <Sidebar className="dashboard-sidebar">
              <Menu>
                <MenuItem>
                  <Link to="manageAllOrders">Manage All Orders</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="addProduct">Add a CAR</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="manageProducts">Manage all Car</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/">Go to Home</Link>
                </MenuItem>
              </Menu>
            </Sidebar>
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

export default AdminDashboard;
