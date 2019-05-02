import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    console.log(this.props);
    const { product } = this.props;
    return (
      <div className='container-fluid'>
        <h1 className='title text-center'>{product.title}</h1>
        <div className='row'>
        <div className='col-3'></div>
          <div className='col-3'>
            <img src={'/' + product.img} className='product-image' alt='product-view' />
          </div>
          <div className='col-3'>
            <p className="text-uppercase">{product.company}</p>
            <p>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            <p>{product.info}</p>
            <button className='btn btn-primary'>Add to Cart</button>
          </div><div className='col-3'></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.product_id;
  console.log(id)
  // const product = state.storeProducts.find(item => item.id === id)
  const product = state.storeProducts[id - 1]
  return {
    product,
  }
}
export default connect(mapStateToProps)(Details);