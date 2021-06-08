import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import ReactGA from 'react-ga'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import NotFound from './screens/NotFound.js'
import CountryDataScreen from './screens/CountryDataScreen.js'
import BedAvailabilityScreen from './screens/BedAvailabilityScreen.js'
import DoctorsScreen from './screens/DoctorsScreen.js'
import OxygenByCityScreen from './screens/OxygenByCityScreen.js'
import OxygenScreen from './screens/OxygenScreen.js'
import AboutusScreen from './screens/AboutusScreen.js'
import HelpScreen from './screens/HelpScreen.js'  
import BloodBankScreen from './screens/BloodBankScreen.js'  
import CarScreen from './screens/CarScreen.js'  
import SafeHomeScreen from './screens/SafeHomeScreen.js'  
import AmbulanceScreen from './screens/AmbulanceScreen.js'  
import DonateScreen from './screens/DonateScreen.js'  
import GoogleFormScreen from './screens/GoogleFormScreen.js'  
import AdminLoginScreen from './screens/AdminLoginScreen.js'  
import AdminPanelScreen from './screens/AdminPanelScreen.js'  
import RegisterScreen from './screens/AdminScreens/RegisterScreen.js'  
import RedVolunteersScreen from './screens/RedVolunteersScreen.js'  
import BedDataEdit from './screens/AdminScreens/BedDataEdit.js'  
import BedDataEditID from './screens/AdminScreens/BedDataEditID.js'  
import DoctorEdit from './screens/AdminScreens/DoctorEdit.js'  
import DoctorEditID from './screens/AdminScreens/DoctorEditID.js'  
import UserEdit from './screens/AdminScreens/UserEdit.js'  
import UserEditID from './screens/AdminScreens/UserEditID.js'  
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
    }, 2000)
  }, []);

  return (

    <Router>

      { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (

      <>
      <Header />

      {/* <Container> */}
        <main>
          <Switch>
          <Route path='/' component={CountryDataScreen} exact />
          <Route path='/country' component={HomeScreen} />
          <Route path='/bed-availability' component={BedAvailabilityScreen} />
          <Route path='/doctors-consultancy' component={DoctorsScreen} />
          <Route path='/oxygen-search' component={OxygenByCityScreen} />
          <Route path='/oxygen-cylinder' component={OxygenScreen} />
          <Route path='/about-us' component={AboutusScreen} />
          <Route path='/help' component={HelpScreen} exact />
          <Route path='/help/form' component={GoogleFormScreen} exact />
          <Route path='/blood-bank' component={BloodBankScreen} exact />
          <Route path='/emergency-car-service' component={CarScreen} exact />
          <Route path='/safe-home' component={SafeHomeScreen} exact />
          <Route path='/ambulance-service' component={AmbulanceScreen} exact />
          <Route path='/donate' component={DonateScreen} exact />
          <Route path='/admin' component={AdminLoginScreen} exact />
          <Route path='/adminPanel' component={AdminPanelScreen} exact />
          <Route path='/adminPanel/register' component={RegisterScreen} exact />
          <Route path='/redVolunteersWB' component={RedVolunteersScreen} />
          <Route path='/admin/bed-availabilityList' component={BedDataEdit} exact />
          <Route path='/admin/doctors-consultancyList' component={DoctorEdit} exact />
          <Route path='/admin/adminUserList' component={UserEdit} exact />
          <Route path='/admin/bed-availabilityEdit/:id/edit' component={BedDataEditID} exact />
          <Route path='/admin/doctor-profile/:id/edit' component={DoctorEditID} exact />
          <Route path='/admin/adminUserList/:id/edit' component={UserEditID} exact />
          <Route component={NotFound} />
          </Switch>

        </main>

      {/* </Container> */}

      <Footer />
      </>

      ) }
    
    </Router>
  );
}

export default App;
