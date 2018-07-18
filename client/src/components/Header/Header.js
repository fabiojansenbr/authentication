import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <li><Link to="/signout">Sign Out</Link></li>
          <li><Link to="/feature">Feature</Link></li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <nav className="cyan darken-2">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">React auth</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Redux Auth</Link></li>
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  (state) => {
    return {
      authenticated: state.auth.authenticated
    };
  }
)(Header);
