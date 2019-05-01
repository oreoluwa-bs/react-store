import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.image} alt='image'/>
          <p>{this.props.name}</p>
          <p>{this.props.company}</p>
          <p>{this.props.price}</p>
          <p>{this.props.info}</p>
          <button>Add to Cart</button>
         </div>
      </div>
    );
  }
}

export default Details;