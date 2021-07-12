import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Pizza from './components/pizza/Pizza';
import Product from './components/products/Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={Pizza} />
        <Route path="/products" component={Product} />
      </Switch>
    )
  }
}

export default App;
