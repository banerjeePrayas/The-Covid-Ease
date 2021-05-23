import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import ReactGA from 'react-ga'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import CountryDataScreen from './screens/CountryDataScreen.js'
import BedAvailabilityScreen from './screens/BedAvailabilityScreen.js'
import DoctorsScreen from './screens/DoctorsScreen.js'
import AboutusScreen from './screens/AboutusScreen.js'
import HelpScreen from './screens/HelpScreen.js'  
import AdminLoginScreen from './screens/AdminLoginScreen.js'  
import AdminPanelScreen from './screens/AdminPanelScreen.js'  
import RedVolunteersScreen from './screens/RedVolunteersScreen.js'  
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";



const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


function App() {

  // useEffect(() => {
  //   ReactGA.initialize('G-HQVG5Z7BDJ')

  //   // To Report Page View
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, [])

  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);

  return (

    <Router>

      { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (

      <>
      <Header />

      {/* <Container> */}
        <main>
          <Route path='/' component={CountryDataScreen} exact />
          <Route path='/country' component={HomeScreen} />
          <Route path='/bed-availability' component={BedAvailabilityScreen} />
          <Route path='/doctors-consultancy' component={DoctorsScreen} />
          <Route path='/about-us' component={AboutusScreen} />
          <Route path='/help' component={HelpScreen} />
          <Route path='/admin' component={AdminLoginScreen} />
          <Route path='/adminPanel' component={AdminPanelScreen} />
          <Route path='/redVolunteersWB' component={RedVolunteersScreen} />
        </main>

      {/* </Container> */}

      <Footer />
      </>

      ) }
    
    </Router>
  );
}

export default App;
