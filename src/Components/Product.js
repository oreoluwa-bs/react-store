import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    return (
      <div className="product-card card">
        <Link to={`/details/${this.props.id}`}>
          <img src={this.props.image} className="card-img" alt="..." />
        </Link>
        <div className="card-body">
          <Link to={`/details/${this.props.id}`} className='text-decoration-none text-reset'>
            <span className="card-title">{this.props.name}</span>
          </Link>
          <span className="card-title float-right">{this.props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
        </div>
      </div>
    );
  }
}

export default Product;