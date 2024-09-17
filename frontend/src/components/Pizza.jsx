import React, { useState, useEffect } from 'react'
import CardPizza from './CardPizza'
import '../Home.css'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001') 
      .then(response => response.json())
      .then(data => setPizza(data)) 
      .catch(error => console.error('Error fetching pizza details:', error))
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
            {pizza ? (
          <div className="col-sm-12 col-md-6 col-lg-4">
            <CardPizza pizza={pizza} />
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Pizza;
