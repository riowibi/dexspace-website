import React from "react";
// import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import Product from "../page/Product";
import SignUp from "../page/SignUp";
import SignIn from "../page/SignIn";

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
            <Switch>
              <Route exact path="/" component={Product} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              {/* <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} /> */}
            </Switch>
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
