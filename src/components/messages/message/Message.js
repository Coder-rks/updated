import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, Grid, Row, Col } from "react-bootstrap";
import "./message.css";
import "../../../AppTheme.css";

class Message extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }
  render(props) {
    return (
      <Link to='/notice' className="gcLink">
        <Panel className="result">
          <Grid>
            <Row>
              <Col xs={12} className = "gcHeader">Account Type</Col>
              <Col xs={12} className="gcInfo">
                {this.props.accountType}
              </Col>
            </Row>
            <Row>
              <Col xs={12} className = "gcHeader">Status</Col>
            </Row>
            <Row>
              <Col style={{WebkitBoxOrient: 'vertical'}} xs={12} className="gcInfo gcNoWrap">
                {this.props.status}
              </Col>
            </Row>
          </Grid>
        </Panel>
      </Link>
    );
  }
}

export default Message;
