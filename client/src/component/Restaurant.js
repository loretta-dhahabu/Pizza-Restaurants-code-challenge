import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import RestaurantPizzaForm from './RestaurantPizzaForm';

function Restaurant ()
{
  const [{ data: restaurant, error, status }, setRestaurant] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  const { id } = useParams();

  
  useEffect(() => {
    fetch(`/restaurants/${id}`).then((response) => {
      if (response.ok) {
        response.json().then( (restaurant) => {
          console.log(restaurant);
          setRestaurant({ data: restaurant, error: "", status: "resolved" })
        } );
        // console.log(restaurant);
      }
      else
      {
        response.json()
          .then((err) =>
            setRestaurant({ data: "", error: err.error, status: "rejected" })
          );
      }
    });
  }, [ id ] );
  
  function handleAddPizza(newPizza) {
    setRestaurant({
      data: {
        ...restaurant,
        pizzas: [...restaurant.pizzas, newPizza],
      },
      error: null,
      status: "resolved",
    });
  }

  
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div className="restbody">
      <div className="container bg-darksalmon">
        <div className="card restcards" key={restaurant.id}>
          <img
            src={restaurant.image}
            className="card-img-top restimages"
            alt={restaurant.name}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{restaurant.name}</h5>
            <p className="card-text text-center">{restaurant.address}</p>
            <div className="restaurant-details">
              <Link
                to={`/restaurants/${restaurant.id}`}
                onClick={() => <Restaurant key={restaurant.id} />}
              >
                <button className="deleteBtn">DELETE</button>
              </Link>

              <Link
                to={`/restaurant_pizzas`}
                onClick={() => <RestaurantPizzaForm key={restaurant.id} />}
              >
                <button className="addBtn ml-auto">Add Pizza</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card restcards">
          <h3 className="text-center text-bold">Our Pizza</h3>
          {restaurant.pizzas.map((pizza) => (
            <div key={pizza.id}>
              <img className="pizzaimg" src={pizza.image} />
              <h5>
                Pizza-Name: <em>{pizza.name}</em>
              </h5>
              <h5>Description</h5>
              <p>
                <em className="text-center">{pizza.description}</em>
              </p>
              <h5>Ingredients</h5>
              <p>
                <em className="">{pizza.ingredients}</em>
              </p>
            </div>
          ))}
        </div>
        <div className="card">
          <h3>Add New Pizza</h3>
          <PizzaForm restaurantId={restaurant.id} onAddPizza={handleAddPizza} />
        </div>
        {/* <div className="card">
          <h3 className="text-center text-bold">Our Pizza</h3>
          {restaurant.pizzas.map((pizza) => (
            <div key={pizza.id}>
              <img className='pizzaimg' src={pizza.image}  />
              <h5>Pizza-Name:{pizza.name}</h5>
              <p>
                <em>{pizza.description}</em>
              </p>
              <p>
                <em>{pizza.ingredients}</em>
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Restaurant;