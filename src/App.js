import React, { Component } from 'react';
import{ Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart';
import Details from './Components/Details';
// import EmptyState from './Components/EmptyState';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details/:product_id' component={Details} />
          <Route path='/cart' component={Cart} />
          {/* <Route component={EmptyState} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;