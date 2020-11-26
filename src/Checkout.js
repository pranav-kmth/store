import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout(props) {
    const [{basket} , dispatch] = useStateValue();


    return (
        <div className="checkout">
            <img className="checkout_ad"
                 src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                 alt="Google ads"
            />
            <div className="checkbox_box">
                <div className = "checkout_left">
                
                        <h2 className="checkout_title">Your shopping basket</h2>    
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            />
                        ))}  
                        { /* The list item*/}                    
                        { /* The list item*/}
                        { /* The list item*/}
                        { /* The list item*/}
                        { /* The list item*/}
                    

                </div>

                <div className="checkout_right">
                    
                        <Subtotal />

                    
                </div>
            </div>
        </div>
    )
}

export default Checkout;
