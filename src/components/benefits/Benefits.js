import React, { Component } from "react";
import { Button, FormGroup, HelpBlock, FormControl } from "react-bootstrap";
import Benefit from "./benefit/Benefit";
import Pagination from "../pagination/Pagination";
import { Link } from "react-router-dom";

import "./benefits.css";

class Benefits extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.getBenefits = this.getBenefits.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      searchVal: "",
      benefits: []
    };
  }

  handleChange(e) {
    this.setState({ searchVal: e.target.value });
  }

  getBenefits() {
    var that = this;
    let user_data = {
      userId: "a780b000000AKa0AAG"
    };

    console.log("get notifications");
    let request = new Request("/api/benefits", {
      method: "POST",
      body: JSON.stringify(user_data),
      headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(request).then(response =>
      response
        .json()
        .then(data => ({
          benefits: data.Benefits
        }))
        .then(res => {
          console.log(res.benefits);
          that.setState({
            benefits: res.benefits
          });
        })
    );
  }
  componentDidMount() {
    this.getBenefits();
  }
  render() {
    return (
      <div className = "gcPB-72">
        <Link
          to="/benefits/enrollment"
          style={{ color: "white", backgroundColor: "#1958b7", float: "right" }}
          className="gcButton"
        >
          Find New Benefits
        </Link>

        <h4 className="benefitsHeader gcBlueText">Your Benefit Enrollments</h4>
        <h6 className="gcGreyText">Showing all benefits you are enrolled</h6>
        <FormGroup>
          <FormControl
            type="text"
            value={this.state.searchVal}
            placeholder="Search"
            onChange={this.handleChange}
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <div className="resultsContainer">
          {this.state.benefits.map(function(ben, index) {
            return <Benefit key={index} name={ben.onegc_program_name__c} detailsLink={ben.onegc_program_details__c} description={ben.onegc_program_description__c}/>;
          })}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Benefits;
