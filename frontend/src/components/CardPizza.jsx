import React from 'react';
import '../CardPizza.css';  
const CardPizza = ({ pizza }) => {
  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <h3 className="pizza-title">{pizza.name}</h3>
      <p className="pizza-price">Precio: ${pizza.price.toLocaleString()}</p>
      <p className="pizza-desc">{pizza.desc}</p>
      <ul className="pizza-ingredients">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </div>
  );
};

export default CardPizza;


