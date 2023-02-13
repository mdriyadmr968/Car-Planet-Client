import React from "react";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";

const DashboardHome = () => {
  const { admin } = useAuth();
  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="">
            {!admin && (
              <h3 className="text-center text-info fw-bold">
                Welcome to the user Dashboard
              </h3>
            )}
            {admin && (
              <h3 className="text-center text-info fw-bold">
                Welcome to the Admin Dashboard
              </h3>
            )}
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

export default DashboardHome;
