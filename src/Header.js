import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';

import {Link} from 'react-router-dom';

function Header() {
    const [{basket} , dispatch] = useStateValue();


    return (
        <div className="header" >
            <Link to="/">
                <img className ="header_logo" alt="logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className = "header_search">
                <input className="header_searchIn" type="text" />
                < SearchIcon className = "header_searchIcon" />
            </div>
            <div className="header_nav" >
                <Link to='/signup'>
                    <div className="header_option">
                        <span className="header_optionOne">Hello Guest</span>
                        <span className="header_optionTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="header_option">
                        <span className="header_optionOne">Returns</span>
                        <span className="header_optionTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionOne">Your</span>
                    <span className="header_optionTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        < ShoppingBasketIcon className="header_basketIcon" />
                        <span className= "header_basketcount">{basket?.length}</span>
                    </div>
                </Link>
            </div>        
        </div>
        );
};

export default Header;
