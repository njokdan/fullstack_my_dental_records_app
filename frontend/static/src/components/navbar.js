import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cookies from 'js-cookie';

class Navigation extends Component {
  render() {
    return(
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-baseline">
            {!!Cookies.get('Authorization') && <NavLink to='/' className="mr-2">Home</NavLink> }
            {!!Cookies.get('Authorization') && <NavLink to='/profile' className="mr-2">Profile</NavLink> }
            {!!Cookies.get('Authorization') && <NavLink to='/records' className="mr-2">Records</NavLink> }
            {!!Cookies.get('Authorization') && <NavLink to='/api_test' className="mr-2">API</NavLink> }
            <NavLink to='/findcare' className="mr-2">Find Care</NavLink>
            <NavLink to='/api_test' className="mr-2">ApiTest</NavLink>
            {!Cookies.get('Authorization') && <NavLink to='/login' className="mr-2">Login</NavLink> }
            {!Cookies.get('Authorization') && <NavLink to='/registration' className="mr-2">Register</NavLink>}
            {!!Cookies.get('Authorization') && <button className="btn" onClick={() => this.props.handleLogout()}>Logout</button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;

// {!Cookies.get('Authorization') && <NavLink to='/findcare' className="mr-2">Find Care</NavLink> }
