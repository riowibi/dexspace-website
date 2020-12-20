import React from 'react';
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserHome from '../page/UserHome'
import SignIn from '../page/SignIn'
// import AuthProvider from '../service/AuthProvider'
import PrivateRoute from '../PrivateRoute'

const App = () => {
  return (
    // <AuthProvider>
        <Router>
          <div>
            <Route exact path="/" component={UserHome} />
            <Route exact path="/signin" component={SignIn} />
          </div>
        </Router>
    // </AuthProvider>
  );
}
export default App;