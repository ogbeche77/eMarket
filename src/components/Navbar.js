import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
           {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
<Link to= "/">
<img src={img} alt="store" className="navbar-brand" />
</Link>
<ul className="navbar-nav align-items-center">
<li className="nav-item ml-5">
<Link to="/" className="nav-link">
Products
</Link>
</li>
</ul>
<Link to="/cart" className="ml-auto">
<button>
<i className="fas fa-cart-plus"/>
My Cart
</button>
</Link>
 </nav>
        )
    }
}
