import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product(props) {
    const [{basket},dispatch] = useStateValue();

    console.log('basket items => ',basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET" ,
            item: {
                id : props.id ,
                price : props.price ,
                image : props.image , 
                rating : props.rating , 
                title : props.title ,
            },
        });
    };
    
    return (
        <div className = "product">
            <div className = "product_info">
                    <p>{props.title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(props.rating)
                        .fill()
                        .map((_,i) => (
                                <p> 🌟</p>
                        )) }                        
                    </div>                     
            </div>

            <img src={props.image}
                alt = "book cover"  className="product_img"  />                    
            <button onClick = {addToBasket} className="product_button">Add to Cart</button>

        </div>
    );
}

export default Product;
