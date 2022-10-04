import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Restaurant from "./Restaurant";

function RestaurantPizzaForm({ pizzas }) {
  const [price, setPrice] = useState("");
  // const [pizzas, setPizzas] = useState([]);
  const [formErrors, setFormErrors] = useState("");
  const { id } = useParams();
  const [formData, setFormData] = useState({
    price: "",
    pizza_id: [],
    restaurant_id: [],
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/restaurant_pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        body: JSON.stringify(formData),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData(data);
      });
  }
  console.log(formData);

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div className="form-group">
  //       <label htmlFor="pizza_id">Pizza:</label>
  //       <select
  //         // id="pizza_id"
  //         name="pizza_id"
  //         value={formData.id}
  //         onChange={handleChange}
  //       >
  //         <option value="">All</option>
  //         {(Array.isArray(formData) ? formData : []).map((pizza) => {
  //           // console.log(formData);
  //           return (
  //             <option key={pizza.id} value={pizza.id}>
  //               {pizza.name}
  //             </option>
  //           );
  //         })}
  //       </select>
  //     </div>

  //     <div className="form-group">
  //       <label htmlFor="pizza_id">Price: </label>
  //       <input
  //         type="number"
  //         value={price}
  //         onChange={(event) => setPrice(event.target.value)}
  //       />
  //     </div>
  //     {formErrors.length > 0
  //       ? formErrors.map((err) => (
  //           <p key={err} style={{ color: "red" }}>
  //             {err}
  //           </p>
  //         ))
  //       : null}
  //     <Link to={`/restaurants/${id}`} onClick={() => <Restaurant />}>
  //       <button className="submitBtn">Add To Restaurant</button>
  //     </Link>
  //     {/* <button className="submitBtn" type="submit">
  //         Add To Restaurant
  //       </button> */}
  //   </form>
  // );
}

export default RestaurantPizzaForm;
