import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Cart extends Component {
  render() {
    console.log(this.props);
    let sn = 0;
    let total = 0;
    return (
      <div>
        <div className='container-fluid'>
          <h1 className='title text-center'>My Cart</h1>
          <div className='container'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className='text-uppercase' scope="col">#</th>
                  <th className='text-uppercase' scope="col">Name</th>
                  <th className='text-uppercase' scope="col">Quantity</th>
                  <th className='text-uppercase' scope="col">Price</th>
                  <th className='text-uppercase' scope="col">Remove from Cart</th>
                </tr>
              </thead>
              <tbody>
                {this.props.myCart.map(item => {
                  total += (item.count * item.price)
                  sn++;
                  return (
                    <tr>
                      <th scope="row">{sn}</th>
                      <td>{item.title}</td>
                      <td>{item.count}</td>
                      <td>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                      <td><FontAwesomeIcon icon={faTrashAlt} className='remove-item-btn' /></td>
                    </tr>
                  )
                })
                }
                <thead>
                  <tr>
                    <th>Total:</th>
                    <th>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</th>
                  </tr>
                </thead>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const myCart = state.storeProducts.filter(item => item.inCart === true)
  return {
    myCart,
  }
}

export default connect(mapStateToProps)(Cart);