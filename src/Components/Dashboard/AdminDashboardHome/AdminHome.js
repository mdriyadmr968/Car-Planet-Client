import React from "react";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { admin } = useAuth();
  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="">
            <h3 className="text-center text-info fw-bold">
              Welcome to the Admin Dashboard
            </h3>
          </div>
        </div>
        <div className="col-12 ">
          <img
            src="https://thumbs.dreamstime.com/b/dashboard-design-vector-illustration-concept-management-manage-your-web-site-template-app-de-development-mobile-ui-ux-199943715.jpg"
            className="img-fluid w-50 center"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
