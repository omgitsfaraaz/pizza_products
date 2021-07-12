import React from 'react';
import stylePizza from './pizzacard.module.css';

function PizzaCard({ data }) {
    return (
        <div className={stylePizza.card}>
            <div className={stylePizza.img_div} style={{backgroundImage: `url(${data.img_url})`, backgroundSize: "cover", height: "150px"}}>
                <span>${data.price}</span>
            </div>
            <div className={stylePizza.details}>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>Rating: {data.rating}</p>
                <button className={stylePizza.pizza_btn}>view pizza</button>
            </div>
        </div>
    )
}

export default PizzaCard;
