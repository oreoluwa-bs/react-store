import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faAtlassian } from '@fortawesome/free-brands-svg-icons';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <Link to='/'>
                    <span className='navbar-brand'>
                        <FontAwesomeIcon icon={faAtlassian} size='2x' color='steelblue'/>
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-5">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">
                                Products <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to='/cart' className="nav-link">
                                <button className='btn btn-primary'><FontAwesomeIcon icon={faCartArrowDown} /> My Cart</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;