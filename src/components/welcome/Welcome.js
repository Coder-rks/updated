import React, { Component } from "react";
import {
  Glyphicon,
  ButtonToolbar,
  Button,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Panel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Link, Redirect  } from "react-router-dom";

import "./welcome.css";

class Welcome extends Component {
  constructor(props, context) {
    super(props, context);

    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.state = {
      loginValue: "",
      pwValue: "",
       title : 'Simple app',
      users : [],
      error : '',
      redirect: 'false'
    };
  }

   verifyUser(event){
    var that = this;
    event.preventDefault();
    console.log('In method');
    let user_data = {
      email : this.state.loginValue,
      password : this.state.pwValue

    };

    var request = new Request('/api/login', {
      method: 'POST',
      body: JSON.stringify(user_data),
      headers : new Headers({'Content-Type' : 'application/json'})
    });

    let users =  that.state.users;
               users.push(user_data);
                that.setState({
                  users : users
      })
    // xmlhttprequest
    if(user_data.email && user_data.password){
       fetch(request)
      .then(function(response){
        response.json()
          .then(function(data){
            // alert(data.message);
            if(data == true){
              that.setState((state) =>({redirect: 'true'}));
            } else {
              that.setState((state) =>({error: 'Invalid'}));
            }
          })
      })
      .catch(function(err){
        console.log(err);
      })
    } else {
       this.state.error = 'Login Error';
    }
}


  handlePWChange(e) {
    this.setState({ pwValue: e.target.value });
  }

  handleLoginChange(e) {
    this.setState({ loginValue: e.target.value });
  }

  render() {
   const redirect = this.state.redirect;
    if (redirect === 'true') {
              return <Redirect to='/verify'/>;
    } 
    return (
      <div>
      
        <h4 className="gcPageHeader gcBlueText gcBold-300">Welcome!</h4>
        <p className="gcGreyText gcStandardText">Simple Secure Access</p>
        <Panel className="welcomeCard">
          <form>
            <FormGroup>
              <ControlLabel className="gcGreyText ">Login</ControlLabel>
              <FormControl
                type="text"
                value={this.state.loginValue}
                placeholder=""
                onChange={this.handleLoginChange}
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.pwValue}
                placeholder=""
                onChange={this.handlePWChange}
                style={{ marginBottom: "20px" }}
              />
            </FormGroup>
            <h6 className="gcBlueText gcBold-300 gcFont-10">FORGOT PASSWORD?</h6>
            <div className = "align-left  PL-14 color-danger font-10" id= "login_error" style ={{color: '#c0392b'}}>{this.state.error}</div>
          </form>
        </Panel>
        <p className="gcGreyText gcFont-10">
          Your oneGC key can be used to access multiple online
          <br />
          <a className="gcBlueText">Enabled Services</a>
        </p>
        <div className="loginButtonContainer gcPT-20 gcPB-72">
          <Button
            className="gcButton"
            style={{ color: "#404040", backgroundColor: "#d1d1d1",width: '35vw' }}
          >
            Cancel
          </Button>
          <Button
          onClick = {this.verifyUser.bind(this)}
            className="gcButton"
            style={{ color: "#404040",
            marginLeft:'1vw',
            marginRight:'1vw',
            backgroundColor: "#FFB6C1",
            width: '35vw' }}
          >
            Verify
          </Button>

          <Link to="/home"
          className="gcButton btn btn-default"
          style={{ color: "white", backgroundColor: "#1958b7", width: '35vw' }} 
          onClick = {this.verifyUser.bind(this)}>
          Sign In
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
