import React, { Component } from 'react';
import stylesbreak from './pizza.module.css';
import PizzaCard from './PizzaCard';

class Breaking extends Component {
    state = {
        pizzaList: []
    }

    API_URL = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68';

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(this.API_URL)
            .then((data) => data.json())
            .then((res) => this.setState({ pizzaList: res }))
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className={stylesbreak.break_div}>
                {this.state.pizzaList.map((pizza) => (
                    <PizzaCard data={pizza} key={pizza.id} />
                ))}
            </div>
        )
    }
}


export default Breaking;