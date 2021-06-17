/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SmallHeader from './SmallHeader'
import { LinkContainer } from 'react-router-bootstrap';  //Alternative of React-Router for Bootstrap
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions';


const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }

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

    <>
    {/* <SmallHeader /> */}
        {/* <nav>
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
            <NavDropdown title="Admin" id="basic-nav-dropdown">
                <LinkContainer  to='/adminPanel'>
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
        ) : '' }
      </ul>
    </nav> */}

<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='nav'>
    <LinkContainer to='/'>
            <div className="logo"><img className='rotate' src='/images/covid-svg.svg' alt='Symbol of Covid-Ease'></img> Covid-Ease</div>

    </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
    <Nav className="mr-auto">
    <Nav.Link><LinkContainer to='/'>
                <a href="#">Home</a>
            </LinkContainer></Nav.Link>
      <Nav.Link><LinkContainer to='/country'>
                <a href="#">State Data</a>
            </LinkContainer></Nav.Link>
        <Nav.Link><LinkContainer to='/about-us'>
                <a href="#">About Us</a>
            </LinkContainer></Nav.Link>
      <NavDropdown title="Resources" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/bed-availability'>
                <a href="#">Beds</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/doctors-consultancy'>
                <a href="#">Doctors</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/oxygen-cylinder'>
                <a href="#">Oxygen</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/ambulance-service'>
                <a  href="#">Ambulance</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/safe-home'>
                <a  href="#">Safe Home</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/blood-bank'>
                <a  href="#">Blood Bank</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/redVolunteersWB'>
                <a href="#">Volunteers</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/blood-bank'>
                <a class="active" href="#">Blood Bank</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/emergency-car-service'>
                <a class="active" href="#">Car</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
        <Nav.Link><LinkContainer to='/help'>
                <a class="active" href="#">Help Me</a>
            </LinkContainer>
        </Nav.Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><LinkContainer to='/contact-us'>
                <a class="active" href="#">Contact Us</a>
            </LinkContainer>
        </Nav.Link>
        <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSeVfjH7dDkiQIHbGo-qAjUaErrUiVABbnNhfvnO3EskVA09sA/viewform" target='_blank'>Add Lead</Nav.Link>
    
        { userInfo ? (
            <NavDropdown title="Admin" id="basic-nav-dropdown">
                <LinkContainer  to='/adminPanel'>
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
        ) : '' }
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>

    )
}

export default Header
