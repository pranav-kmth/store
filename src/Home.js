import React from 'react';
import Product from './components/Product';

function Home() {
    return (
        <div className="home">
            < div className="home_container" >
                < img className ="home_image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/engagement/newsletter/2018/Mar18/640X250.jpg" 
                alt="amazon ad" />

                <div className="home_row">
                    <Product />
                    <Product />
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                </div>

                <div className="home_row">

                </div>

            </div >
        </div>
    );
}

export default Home ;
