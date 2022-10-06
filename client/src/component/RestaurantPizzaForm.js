import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Restaurant from "../component/Restaurant";

function RestaurantPizzaForm({ onAddingPizza }) {
  // console.log(pizzas)
  const [pizzas, setPizza] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    price: "",
    pizza_id: "",
    restaurant_id: "",
  });
  // const { id } = useParams();
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  // console.log(formData)

  useEffect(() => {
    fetch("/api/pizzas")
      .then((response) => response.json())
      .then((data) => {
        setPizza(data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch("/api/restaurant_pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      // console.log(response);
      if (response.ok) {
        response.json().then((newPizza) => {
          console.log(newPizza);
          onAddingPizza(newPizza);

          // navigate(`/restaurants/${id}`);
          setErrors([]);
        });
      } else {
        response.json().then((error) => console.log(error.errors));
      }
    });
  }
  return (
    <div>
      <form className="container mt-3 " onSubmit={handleFormSubmit}>
        <div className="pizza-form">
          <label htmlFor="price" className="mr-2">
            Price:{" "}
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="pizza-form">
          <label htmlFor="pizza_id" className="mr-2">
            Pizza_Id:
          </label>
          <select
            className="px-5 text-left"
            name="pizza_id"
            value={formData.pizza_id}
            onChange={handleChange}
          >
            <option value="">All Pizzas</option>
            {(Array.isArray(pizzas) ? pizzas : []).map((pizza) => {
              // console.log(pizza);
              return (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="pizza-form">
          <label htmlFor="restaurant_id" className="mr-2">
            Restaurant_Id:
          </label>
          <select
            className="px-5 text-left"
            name="restaurant_id"
            value={formData.restaurant_id}
            onChange={handleChange}
          >
            <option value="">All Restaurants</option>
            {(Array.isArray(restaurants) ? restaurants : []).map(
              (restaurant) => {
                // console.log(formData);
                return (
                  <option key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </option>
                );
              }
            )}
          </select>
        </div>
        <button
          className="submitBtn"
          type="submit"
          onClick={() => {
            handleFormSubmit();
            navigate("/restaurant");
          }}
        >
          Add To Restaurant
        </button>
      </form>
    </div>
  );
}

export default RestaurantPizzaForm;
