import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stylesHome from './home.module.css';

class Home extends Component {
    render() {
        return (
            <div className={stylesHome.home_div}>
                <Link to="/pizza">
                    <button className={stylesHome.breaking}>Pizza</button>
                </Link>
                <Link to="/products">
                    <button className={stylesHome.products}>Products</button>
                </Link>
            </div>
        )
    }
}

export default Home;
