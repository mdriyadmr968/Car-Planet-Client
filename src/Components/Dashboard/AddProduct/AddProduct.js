import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  document.title = "Add a Car";
  const onSubmit = (data) => {
    axios
      .post(
        "https://car-planet-server-mdriyadmr968.vercel.app/addProduct",
        data
      )
      .then((res) => {
        if (res.data.insertedId) {
          alert("Car has been added Successfully");
          reset();
        }
      });
  };
  return (
    <div
      className="container mt-5"
      style={{ height: "100vh", marginBottom: "200px" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label forhtml="exampleInputName" className="form-label">
            Name of Car
          </label>
          <input
            className="form-control"
            id="exampleInputName"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputPrice" className="form-label">
            Price
          </label>
          <input
            className="form-control"
            id="exampleInputPrice"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputDesc" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            id="exampleInputDesc"
            {...register("desc")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputImg" className="form-label">
            Image Url
          </label>
          <input
            className="form-control"
            id="exampleInputImg"
            {...register("img")}
          />
        </div>

        <input
          //   className="btn btn-primary"
          type="submit"
          className="btn btn-dark"
          value="Add CAR"
        />
      </form>
    </div>
  );
};

export default AddProduct;
