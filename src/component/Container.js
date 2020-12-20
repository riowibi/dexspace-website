import React from "react";
// import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// import AuthProvider from "../service/AuthProvider"

import Product from "../page/Product";
import SignIn from "../page/SignIn";
import UserHome from "../page/UserHome";
import UserProfile from "../page/UserProfile";
import UserCreateDex from "../page/UserCreateDex";
import UserDex from "../page/UserDex";
import AdminHome from "../page/AdminHome";
import AdminDexList from "../page/AdminDexList";
import AdminUserList from "../page/AdminUserList";
import AdminUpdateDex from "../page/AdminUpdateDex";
import PrivateRoute from '../PrivateRoute'

export default function Container({ location }) {
  return (
    <div>
    {/* // <Wrapper> */}
      {/* <TransitionGroup className="transition-group">
        <CSSTransition */}
          {/* key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        > */}
          {/* <section className="route-section"> */}
          {/* <AuthProvider> */}
            <Switch>
              <Route exact path="/" component={Product} />
              <Route exact path="/signin" component={SignIn} />
              <PrivateRoute exact path="/home" component={UserHome} />
              <PrivateRoute exact path="/profile" component={UserProfile} />
              <PrivateRoute exact path="/create-dex" component={UserCreateDex} />
              <PrivateRoute exact path="/dex/:name" component={UserDex} />
              <PrivateRoute exact path="/dashboard" component={AdminHome} />
              <PrivateRoute exact path="/dex-list/:status" component={AdminDexList} />
              <PrivateRoute exact path="/dex-update/:name" component={AdminUpdateDex} />
              <PrivateRoute exact path="/user-list" component={AdminUserList} />
            </Switch>
          {/* </AuthProvider> */}
          {/* </section> */}
        {/* </CSSTransition>
      </TransitionGroup> */}
    {/* </Wrapper> */}
    </div>
  );
}

// const Wrapper = styled.div`
//   .fade-enter {
//     opacity: 0.01;
//   }

//   .fade-enter.fade-enter-active {
//     opacity: 1;
//     transition: opacity 300ms ease-in;
//   }

//   .fade-exit {
//     opacity: 1;
//   }

//   .fade-exit.fade-exit-active {
//     opacity: 0.01;
//     transition: opacity 300ms ease-in;
//   }

//   div.transition-group {
//     position: relative;
//   }

//   section.route-section {
//     position: absolute;
//     width: 100%;
//     top: 0;
//     left: 0;
//   }
// `;

// export default withRouter(Container);
