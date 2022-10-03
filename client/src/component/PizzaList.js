import React, { useEffect, useState } from 'react'


function PizzaList ()
{
  const [ pizzas, SetPizzas ] = useState( [] )
  
  useEffect( () =>
  {
    fetch( '/pizzas' )
      .then( ( response ) =>response.json())
      .then( ( data ) =>
      {
        console.log( data );
        SetPizzas(data)
    })
  }, [] )
  
  let getPizzas = pizzas.map( ( pizza ) =>
  {
    return (
      <div className="restbody" key={pizza.id}>
        <div className="container bg-darksalmon">
          <div className="card restcards">
            <img
              src={pizza.image}
              className="card-img-top restimages"
              alt={pizza.name}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                Pizza-Name: <em>{pizza.name}</em>
              </h5><br></br>
              <h4>Description</h4>
              <p className="card-text text-center">{pizza.description}</p>
              <h4>Ingredients</h4>
              <p className="card-text text-center">{pizza.ingredients}</p>
              <div className="pizza-details">
                {/* <Link
                  to={`/pizzas/${pizza.id}`}
                  onClick={() => <pizza key={pizza.id} />}
                >
                  <button className="viewBtn">View More</button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
  return (
    <div>{getPizzas}</div>
  )
}

export default PizzaList;