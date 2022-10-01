import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/restaurants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRestaurants(() => data);
      });
  }, []);

  let hotelList = restaurants.map((restaurant) => {
    return (
      <div className="card" key={restaurant.id}>
        <img
          src={restaurant.image}
          className="card-img-top"
          alt={restaurant.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Card title{restaurant.name}</h5>
          <p className="card-text text-center">{restaurant.address}</p>
          <div className="restaurant-details">
                <Link
                 to={`/restaurants/${restaurant.id}`}
                 onClick={() => <Restaurant key={restaurant.id} />}
               >
                 <button className="viewBtn">View More</button>
              </Link>
             </div>
        </div>
      </div>
      // <div className="container" key={restaurant.id}>
      //   <div className="row">
      //     <div className="col-12 col-md-12 col-lg-12">
      //       <div className="meal-imgs">
      //         <img src={restaurant.image} className="restaurant-img" />
      //       </div>
      //       <div className="details">
      //         <h3>
      //           <em>Title: </em>
      //           {restaurant.name}
      //         </h3>
      //         <p>{restaurant.address}</p>
      //         <div className="restaurant-details">
      //           <Link
      //             to={`/restaurants/${restaurant.id}`}
      //             onClick={() => <Restaurant key={restaurant.id} />}
      //           >
      //             <button>View More</button>
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  });
  return <div>{hotelList}</div>;
}

export default RestaurantList;
