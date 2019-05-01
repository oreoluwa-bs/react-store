import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="product-card card">
        <img src={this.props.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <span className="card-title">{this.props.name}</span>
            <span className="card-title float-right">{this.props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
        </div>
        );
      }
    }
    
export default Product;