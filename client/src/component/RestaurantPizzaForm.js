import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Restaurant from "./Restaurant";


function RestaurantPizzaForm({ restaurantId, onAddPizza }) {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaId, setPizzaId] = useState("");
  const [price, setPrice] = useState("");
    const [ formErrors, setFormErrors ] = useState( [] );
    
    const { id } = useParams();

  useEffect(() => {
    fetch("/pizzas")
      .then((response) => response.json())
      .then(setPizzas);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      pizza_id: pizzaId,
      restaurant_id: restaurantId,
      price: parseInt(price),
    };
    fetch("/restaurant_pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((newPizza) => {
          onAddPizza(newPizza);
          setFormErrors([]);
        });
      } else {
        response.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pizza_id">Pizza:</label>
          <select
            id="pizza_id"
            name="pizza_id"
            value={pizzaId}
            onChange={(event) => setPizzaId(event.target.value)}
          >
            <option value="">All</option>
            {pizzas.map((pizza) => (
              <option key={pizza.id} value={pizza.id}>
                {pizza.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pizza_id">Pizza-Image:</label>
          <select
            className="imageselect"
            id="pizza_id"
            name="pizza_id"
            value={pizzaId}
            onChange={(event) => setPizzaId(event.target.value)}
          >
            <option value="">All</option>
            {pizzas.map((pizza) => (
              <option key={pizza.id} value={pizza.id}>
                {pizza.image}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pizza_id">Price: </label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        {formErrors.length > 0
          ? formErrors.map((err) => (
              <p key={err} style={{ color: "red" }}>
                {err}
              </p>
            ))
          : null}
        <Link to={`/restaurants/${id}`} onClick={() => <Restaurant />}>
          <button className="submitBtn">Add To Restaurant</button>
        </Link>
        {/* <button className="submitBtn" type="submit">
          Add To Restaurant
        </button> */}
      </form>
    );
}

export default RestaurantPizzaForm;
