import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import {
  Glyphicon,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  Panel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import "./notice.css";

class Notice extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className = "gcPB-72">
        <h4 className="gcPageHeader gcBlueText">
          Notice of Assessment
        </h4>
        <Panel className="result">
          <Grid>
            <Row>
              <Col xs={12} className="gcGreyText">Details</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcBold  gcInfo">
                Address: 1449 Crescent St Montreal QC H3Q 282
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="gcBold gcInfo">
                Date Issued: Apr 30, 2018
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="gcBold gcInfo">
              Tax Year: 2017
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="gcBold gcInfo">
                Social Insurance Number: XXX-XXX-XX32
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={{display: 'flex', justifyContent:'center'}}>
                <Link to="/account">
                  <Button style={{marginTop: '15px', padding:"5px", width: "40vw"}} className="blueButton gcButton">Personal Info</Button>
                </Link>
              </Col>
            </Row>
          </Grid>
        </Panel>

        <Panel className="result">
          <Grid>
            <Row>
              <Col xs={12} className="gcGreyText">Message</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcBold gcInfo">
                We assessed your 2017 income and benefits and calculated your balance.
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcBold gcInfo">
                You have a refund of $2626.98
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcBold gcInfo">
                Thank you,
              </Col>
              <Col xs={12} className="gcBold gcMedGrey">
                Ben Hamilton
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcGreyText">Account Summary</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcBold gcInfo">You have a refund of $2626.98</Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcGreyText">Tax Assessment</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcBold gcInfo">
                We calculated your taxes using the amount given to us.  The following summary is based on the provided information
              </Col>
            </Row>

          </Grid>
        </Panel>
      </div>
    );
  }
}

export default Notice;
