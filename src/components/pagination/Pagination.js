import React, { Component } from "react";
import { Glyphicon, ButtonToolbar, Button } from "react-bootstrap";
import "./pagination.css";

class Pagination extends Component {
  render() {
    return (
    <div className = "container">
      <ButtonToolbar>
        <Button className="paginationButton arrow">
          <Glyphicon glyph="arrow-left" />
        </Button>
        <div className="pageContainer">
          <Button className="paginationButton active">1</Button>
          <Button className="paginationButton">2</Button>
          <Button className="paginationButton">3</Button>
          <Button className="paginationButton">4</Button>
          <Button className="paginationButton">5</Button>
          <Button className="paginationButton">6</Button>
          <Button className="paginationButton">7</Button>
        
        </div>
        <Button className="paginationButton arrow">
          <Glyphicon glyph="arrow-right" />
        </Button>
      </ButtonToolbar>
      </div>
    );
  }
}

export default Pagination;
