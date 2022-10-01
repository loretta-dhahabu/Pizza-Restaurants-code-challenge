import React, { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

function Restaurant ({image, name, address})
{
  const [ restaurant, setRestaurant ] = useState( {} )
  const { id } = useParams();
  // const restList = address.map((addres) => (
  //   <span key={addres}>{addres}</span>
  // ) );
  
  useEffect( () =>
  {
    fetch( `/restaurants/${id}` )
    .then( ( response ) => response.json() )
      .then( ( data ) =>
      {
        console.log( data );
        setRestaurant(()=> data)
    })
  }, [ id ] )
  

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
            <h5 className="card-title text-center">
              Card title{restaurant.name}
            </h5>
            <p className="card-text text-center">{restaurant.address}</p>
            <div className="restaurant-details">
              <Link
                to={`/restaurants/${restaurant.id}`}
                onClick={() => <Restaurant key={restaurant.id} />}
              >
                <button className="viewBtn">EDIT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;