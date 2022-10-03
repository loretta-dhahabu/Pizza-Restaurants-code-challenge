import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [] );
  
  async function getRestaurants ()
  {
    let result = await fetch("/restaurants")
    result = await result.json()
    setRestaurants(result)
  }
  function handleDelete(id) {
    fetch(`/restaurants/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        const deleteRestaurant = restaurants.filter(
          (restaurant) => restaurant.id !== id
        );
        setRestaurants(deleteRestaurant);
      })

      .catch((err) => console.log(err));
    alert( "successifully deleted" );
    
    getRestaurants();
  }

  let hotelList = restaurants.map((restaurant) => {
    return (
      <div className="restbody" key={restaurant.id}>
        <div className="container bg-darksalmon">
          <div className="card restcards">
            <img
              src={restaurant.image}
              className="card-img-top restimages"
              alt={restaurant.name}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                Card title{restaurant.name}
              </h5>
              <p className="card-text text-center">{restaurant.address}</p>
              <div className="restaurant-details">
                <button
                  onClick={() => {
                    handleDelete(restaurant.id);
                  }}
                  className="deleteBtn"
                >
                  DELETE
                </button>
                <Link
                  to={`/restaurants/${restaurant.id}`}
                  onClick={() => <Restaurant key={restaurant.id} />}
                >
                  <button className="viewBtn">View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    );
  });
  return (
    <div>
      {hotelList}
    </div>
  );
}

export default RestaurantList;
