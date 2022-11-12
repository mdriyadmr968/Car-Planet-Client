import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { logOut, admin } = useAuth();

  return (
    <div>
      <div>
        {!admin && (
          <Sidebar>
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
          <Sidebar>
            <Menu>
              <MenuItem>
                <Link to="manageAllOrders">Manage All Orders</Link>
              </MenuItem>
              <MenuItem>
                <Link to="addProduct">Add a Product</Link>
              </MenuItem>
              <MenuItem>
                <Link to="makeAdmin">Make Admin</Link>
              </MenuItem>
              <MenuItem>
                <Link to="manageProducts">Manage Products</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Go to Home</Link>
              </MenuItem>
            </Menu>
          </Sidebar>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
