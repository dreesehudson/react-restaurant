import React from 'react';
import { Jumbotron, Media, Row, Col } from 'reactstrap';


function Menu(props) {
  console.log(props.apps);
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
            <hr />
          </Col>
        </Row>
        {props.apps.map((item, idx) =>
          <Row className="my-2">
            <Col className="col-9 text-left">
              <h5 key={idx + 100}>{item}</h5>
            </Col>
            <Col className="col-3 text-right">
              <h5>€{item.length}</h5>
            </Col>
          </Row>
        )}
      </Jumbotron>




      <Jumbotron className="container-fluid pt-4">
        <Row>
          <Col>
            <h3 className="text-center">{props.menu[1].name}</h3>
            <hr />
          </Col>
        </Row>
        {
          props.lunch.map((item, idx) =>
            <Row className="my-2">
              <Col className="col-9 text-left">
                <h5 key={idx + 200}>{item}</h5>
              </Col>
              <Col className="col-3 text-right">
                <h5>€{item.length}</h5>
              </Col>
            </Row>
          )
        }
      </Jumbotron>

      <Jumbotron className="container-fluid pt-4">
        <Row>
          <Col>
            <h3 className="text-center">{props.menu[2].name}</h3>
            <hr />

          </Col>
        </Row>
        {props.main.map((item, idx) =>
          <Row className="my-2">
            <Col className="col-9 text-left">
              <h5 key={idx + 400}>{item}</h5>
            </Col>
            <Col className="col-3 text-right">
              <h5>€{item.length}</h5>
            </Col>
          </Row>
        )}
      </Jumbotron>

      <Jumbotron className="container-fluid pt-4">
        <Row>
          <Col>
            <h3 className="text-center">{props.menu[3].name}</h3>
            <hr />

          </Col>
        </Row>
        {props.sides.map((item, idx) =>
          <Row className="my-2">
            <Col className="col-9 text-left">
              <h5 key={idx + 600}>{item}</h5>
            </Col>
            <Col className="col-3 text-right">
              <h5>€{item.length}</h5>
            </Col>
          </Row>
        )}
      </Jumbotron>

      <Jumbotron className="container-fluid pt-4">
        <Row>
          <Col>
            <h3 className="text-center">{props.menu[4].name}</h3>
            <hr />

          </Col>
        </Row>
        {props.desserts.map((item, idx) =>
          <Row className="my-2">
            <Col className="col-9 text-left">
              <h5 key={idx + 700}>{item}</h5>
            </Col>
            <Col className="col-3 text-right">
              <h5>€{item.length}</h5>
            </Col>
          </Row>
        )}
      </Jumbotron>
    </>
  );
}

export default Menu;