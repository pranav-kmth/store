import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className = "product">
            <div className = "product_info">
                <p>The firstline of the twenty line description </p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>19.99</strong>
                    </p>
                    <div className="product_rating">
                        <p>1 Star</p>
                    </div>                     
            </div>

            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
                        alt = "book cover"  className="product_img"  />                    
            <button className="product_button">Add to Cart</button>

        </div>
    );
}

export default Product;
