import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import GCNavBar from "./gcNavBar/GCNavBar";
import Welcome from "./welcome/Welcome";
import Home from "./home/Home";
import Messages from "./messages/Messages";
import Account from "./account/Account";
import Enrollment from "./enrollment/Enrollment";
import Benefits from "./benefits/Benefits";
import Notice from "./notice/Notice";
import Verify from "./verify/Verify";

class App extends Component {
  render() {
    return (
      <div>
      <HashRouter>
        <div>
          <GCNavBar />
          <div className="container">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/verify" component={Verify} />
            <Route exact path="/notice" component={Notice} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Welcome} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/benefits" component={Benefits} />
            <Route exact path="/benefits/enrollment" component={Enrollment} />
          </div>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
