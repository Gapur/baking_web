import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../auth/userActions';
import logo from '../img/baking.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <nav className="navbar is-warning">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item navbar-logo" to="/">
              <img className="navbar-logo-img" src={logo} alt="Cook" />BAKING
            </Link>
            <div className="navbar-burger burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start"></div>
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <span className="navbar-link">{this.props.user.user.email}</span>
                <div className="navbar-dropdown">
                  <Link to="/" className="navbar-item">Account Setting</Link>
                  <Link to="/recipes" className="navbar-item">All Recipes</Link>
                  <Link to="/notes" className="navbar-item">My Notes</Link>
                  <Link to="/recipes/my" className="navbar-item">My Recipes</Link>
                  <a className="navbar-item" onClick={this.handleLogout}>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { logout }
)(Header);
