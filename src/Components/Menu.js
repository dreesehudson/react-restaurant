import React from 'react';
import { Jumbotron, Media, Row, Col } from 'reactstrap';


function Menu(props) {
  return (
    <>

      {/* Static Chef's Special Section */}
      <Jumbotron className="container-fluid">
        <Media>
          <Media body>
            <Row>
              <div className="col-6 col-md-3 text-center my-auto">
                <img src={props.images[0].img} className="img-fluid rounded-circle" alt={props.images.name} />
              </div>
              <div className="col-6 col-md-9">
                <Row>
                  <Col>
                    <h3 className="mb-3">Chef's Specialty</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="mb-4 text-left">Remy's Ratatouille</h4>
                  </Col>
                  <Col>
                    <h4 className="mb-4 text-right">€19</h4>
                  </Col>
                </Row>
                <blockquote>"It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau's,
                who is, in this critic's opinion, nothing less than the finest chef in France.
                I will be returning to Gusteau's soon, hungry for more."</blockquote>
                <p className="text-right"> - Anton Ego</p>
              </div>
            </Row>
          </Media>
        </Media>
      </Jumbotron>



      {/* Dynamic Apps */}      
      <Jumbotron className="container-fluid pt-4">
        <Row>
          <Col>
            <h3 className="text-center">{props.menu[0].name}</h3>
          </Col>
        </Row>
        <Row>
          <Col className="col-9 text-left">
            <h5>Peevish chicken leg</h5>
            <h6>with swaddled snow peas and enveloped pumpkin</h6>
          </Col>
          <Col className="col-3 text-right">
            <h5>€25</h5>
          </Col>
        </Row>
      </Jumbotron>
      

      {/* Dynamic Lunch */}
      <Jumbotron className="container-fluid">
        <Row>
          <Col className="col-9 text-left">
            <h6>Food</h6>
          </Col>
          <Col className="col-3 text-right">
            <h6>€Price</h6>
          </Col>
        </Row>
      </Jumbotron>

      {/* Dynamic Main Dishes */}
      <Jumbotron className="container-fluid">
        <Row>
          <Col className="col-9 text-left">
            <h6>Food</h6>
          </Col>
          <Col className="col-3 text-right">
            <h6>€Price</h6>
          </Col>
        </Row>
      </Jumbotron>

      {/* Dynamic Sides */}
      <Jumbotron className="container-fluid">
        <Row>
          <Col className="col-9 text-left">
            <h6>Food</h6>
          </Col>
          <Col className="col-3 text-right">
            <h6>€Price</h6>
          </Col>
        </Row>
      </Jumbotron>

      {/* Dynamic Desserts */}
      <Jumbotron className="container-fluid">
        <Row>
          <Col className="col-9 text-left">
            <h6>Food</h6>
          </Col>
          <Col className="col-3 text-right">
            <h6>€Price</h6>
          </Col>
        </Row>
      </Jumbotron>


    </>
  );
};

export default Menu;