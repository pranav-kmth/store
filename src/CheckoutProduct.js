import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
    const [{basket} , dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch ({
            type : "REMOVE_FROM_BASKET",
            id : props.id ,
        })

    }


    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={props.image} />

            <div className='checkoutProductInfo'>
                <p className='checkoutProductTitle'>{props.title}</p>
                <p className="checkoutProductPrice">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProductRating">
                    {Array(props.rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                
                    <button onClick={removeFromBasket} className="checkoutProductButton">Remove from Basket</button>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
