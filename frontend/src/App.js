import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import CountryDataScreen from './screens/CountryDataScreen.js'
import BedAvailabilityScreen from './screens/BedAvailabilityScreen.js'
import DoctorsScreen from './screens/DoctorsScreen.js'
import AboutusScreen from './screens/AboutusScreen.js'
import HelpScreen from './screens/HelpScreen.js'  
import AdminLoginScreen from './screens/AdminLoginScreen.js'  


function App() {
  return (

    <Router>
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
        </main>

      {/* </Container> */}

    <Footer />
    </Router>
  );
}

export default App;
