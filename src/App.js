import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Components/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Components/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
import Payment from "./Components/Dashboard/Payment/Payment";
import Explore from "./Components/Explore/Explore";
import Home from "./Components/Homepage/Home/Home";
import Login from "./Components/Login/Login";
import Purchase from "./Components/Purchase/Purchase";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<DashboardHome />}></Route>
              <Route path="myOrders" element={<MyOrders />}></Route>
              <Route path="reviews" element={<AddReview />}></Route>
              <Route
                path="manageAllOrders"
                element={<ManageAllOrders />}
              ></Route>
              <Route path="addProduct" element={<AddProduct />}></Route>
              <Route path="makeAdmin" element={<MakeAdmin />}></Route>
              <Route path="manageProducts" element={<ManageProducts />}></Route>
            </Route>
            <Route path="/purchase/:carID" element={<Purchase />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
