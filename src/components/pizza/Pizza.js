import React, { Component } from 'react';
import stylesbreak from './pizza.module.css';
import PizzaCard from './PizzaCard';

class Breaking extends Component {
    state = {
        pizzaList: [],
        sortType: ""
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

    sortPizzaList = sortType => {
        let sortedList;
        if(sortType === "price") {
            sortedList = this.state.pizzaList.sort((a, b) => {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;
            })
            this.setState({ pizzaList: sortedList });
        } else if (sortType === "rating") {
            sortedList = this.state.pizzaList.sort((a, b) => {
                if (b.rating < a.rating) return -1;
                if (b.rating > a.rating) return 1;
                return 0;
            })
            this.setState({ pizzaList: sortedList });
        } else if (sortType === "reset") {
            sortedList = this.state.pizzaList.sort((a, b) => {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            })
        }
    }

    render() {
        return (
            <>
                <div className={stylesbreak.sort_div}>
                    <h3>
                        SortBy Price:
                        <input type="radio" name="sort" onChange={() => this.sortPizzaList("price")} />
                    </h3>
                    <h3>
                        SortBy Rating:
                        <input type="radio" name="sort" onChange={() => this.sortPizzaList("rating")} />
                    </h3>
                    <h3>
                        Clear filter:
                        <input type="radio" name="sort" onChange={() => this.sortPizzaList("reset")} />
                    </h3>
                </div>
                <div className={stylesbreak.break_div}>
                    {this.state.pizzaList.map((pizza) => (
                        <PizzaCard data={pizza} key={pizza.id} />
                    ))}
                </div>
            </>
        )
    }
}


export default Breaking;