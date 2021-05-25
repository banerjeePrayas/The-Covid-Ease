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
        // <header>
        //     <nav class="navbar navbar-expand-lg navbar-light">
        //         <div class="container-fluid">
        //             <LinkContainer to='/'>
        //                 <Navbar.Brand class="navbar-brand"><img className='rotate' src='/images/covid-svg.svg'></img> Covid-Ease</Navbar.Brand>
        //             </LinkContainer>
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //             </button>

        //             <div class="collapse navbar-collapse" id="navbarColor03">

        //             <ul class="navbar-nav me-auto">
        //                 <li class="nav-item">
        //                     <LinkContainer to='/country'>
        //                         <Nav.Link class="nav-link active">State-Data</Nav.Link>
        //                     </LinkContainer>
        //                 </li>
        //                 <li class="nav-item">
        //                     <LinkContainer to='/bed-availability'>
        //                         <Nav.Link class="nav-link">Bed-Data</Nav.Link>
        //                     </LinkContainer>
        //                 </li>
        //                 <li class="nav-item">
        //                     <LinkContainer to='/doctors-consultancy'>
        //                         <Nav.Link class="nav-link">Doctors</Nav.Link>
        //                     </LinkContainer>
        //                 </li>
        //                 <li class="nav-item">
        //                     <LinkContainer to='/redVolunteersWB'>
        //                         <Nav.Link class="nav-link red" style={{ "color": 'red' }}>Red Volunteers</Nav.Link>
        //                     </LinkContainer>
        //                 </li>
        //                 <li class="nav-item">
        //                     <LinkContainer to='/about-us'>
        //                         <Nav.Link class="nav-link">About</Nav.Link>
        //                     </LinkContainer>
        //                 </li>
        //                 <li class="nav-item">
        //                     <LinkContainer to='/help'>
        //                         <Nav.Link class="nav-link">Help</Nav.Link>
        //                     </LinkContainer>
        //                 </li>
                        
        //             </ul>
        //             {/* <div className='menu-wrap'>
        //                 <input type="checkbox" class="toggler" />
        //                     <div class="hamburger">
        //                     <div></div>
        //                 </div>
        //             </div> */}

        //             {/* <form class="d-flex">
        //                 <input class="form-control me-sm-2" type="text" placeholder="Search"></input>
        //                 <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        //             </form> */}

        //             </div>
        //         </div>

        //         { userInfo ? (
        //             <LinkContainer to='/adminPanel'><a><i class="far fa-user-circle"></i> ADMIN</a></LinkContainer>
        //         ) : '' }
        //     </nav>
        // </header>

    <nav>
        <LinkContainer to='/'>
            <div className="logo"><img className='rotate' src='/images/covid-svg.svg'></img> Covid-Ease</div>

        </LinkContainer>
      <input type="checkbox" id="click"></input>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li>
            <LinkContainer to='/country'>
                <a class="active" href="#">State Data</a>
            </LinkContainer>
        </li>
        <li>
            <LinkContainer to='/bed-availability'>
                <a class="active" href="#">Beds</a>
            </LinkContainer>
        </li>
        <li>
            <LinkContainer to='/doctors-consultancy'>
                <a class="active" href="#">Doctors</a>
            </LinkContainer>
        </li>
        <li>
            <LinkContainer to='/redVolunteersWB'>
                <a class="active" href="#">Red Volunteers</a>
            </LinkContainer>
        </li>
        <li>
            <LinkContainer to='/about-us'>
                <a class="active" href="#">About</a>
            </LinkContainer>
        </li>
        <li>
            <LinkContainer to='/help'>
                <a class="active" href="#">Help</a>
            </LinkContainer>
        </li>

        { userInfo ? (
            <li>
            <LinkContainer to='/adminPanel'>
                <a class="active" href="#">Admin</a>
            </LinkContainer>
        </li>
        ) : '' }
      </ul>
    </nav>

    )
}

export default Header
