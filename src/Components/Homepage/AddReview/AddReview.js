import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    document.title = "Add More Trips";

    const onSubmit = (data) => {
      axios
        .post("https://hidden-eyrie-12216.herokuapp.com/reviews", data)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Your Review has been  Added");
            reset();
          }
        });
      console.log(data);
    };
  return <div></div>;
};

export default AddReview;
