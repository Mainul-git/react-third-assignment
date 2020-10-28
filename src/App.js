import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homefontpage from './components/Homefontpage/Homefontpage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Secondpage from './components/SecondPage/Secondpage';
import Login from './components/Login/Login';
import HomeHotelMap from './components/HomeHotelMap/HomeHotelMap';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext=createContext()



function App(props) {
  const[loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
<Router>
  <Switch>
  <Route exact path="/travel">
  <Homefontpage></Homefontpage>
    </Route>
    <Route path="/booking/:usingId">
      <Secondpage></Secondpage>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    <PrivateRoute path="/confirm/:mapId">
      <HomeHotelMap></HomeHotelMap>
    </PrivateRoute>
    <Route exact path="/">
    <Homefontpage></Homefontpage>
    </Route>
    <Route path="*">
      <NoMatch></NoMatch>
    </Route>
  </Switch>
</Router>
    
</UserContext.Provider>
  );
}

export default App;
