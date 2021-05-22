/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';  //Alternative of React-Router for Bootstrap
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux'


const Header = () => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;


    return (
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <LinkContainer to='/'>
                        <Navbar.Brand class="navbar-brand"><img className='rotate' src='/images/covid-svg.svg'></img> Covid-Ease</Navbar.Brand>
                    </LinkContainer>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse collapse" id="navbarColor02">

                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <LinkContainer to='/country'>
                                <Nav.Link class="nav-link active">State-Data</Nav.Link>
                            </LinkContainer>
                        </li>
                        <li class="nav-item">
                            <LinkContainer to='/bed-availability'>
                                <Nav.Link class="nav-link">Bed-Data</Nav.Link>
                            </LinkContainer>
                        </li>
                        <li class="nav-item">
                            <LinkContainer to='/doctors-consultancy'>
                                <Nav.Link class="nav-link">Doctors</Nav.Link>
                            </LinkContainer>
                        </li>
                        <li class="nav-item">
                            <LinkContainer to='/about-us'>
                                <Nav.Link class="nav-link">About</Nav.Link>
                            </LinkContainer>
                        </li>
                        <li class="nav-item">
                            <LinkContainer to='/help'>
                                <Nav.Link class="nav-link">Help</Nav.Link>
                            </LinkContainer>
                        </li>
                        {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
                        </li> */}
                    </ul>

                    {/* <form class="d-flex">
                        <input class="form-control me-sm-2" type="text" placeholder="Search"></input>
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                    </div>
                </div>

                { userInfo ? (
                    <p>ADMIN</p>
                ) : '' }
            </nav>
        </header>
    )
}

export default Header
