import React, { Component } from 'react';
import Product from './Product';
import storeProducts from '../data';

class ProductList extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title text-center'>Our Products</h1>
        <div className='row'>
          {storeProducts.map(item => {
            return (
              <div className='col-6 col-md-3' key={item.id+'p'}>
                <div>
                  <Product id={item.id} image={item.img} name={item.title} price={item.price} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;