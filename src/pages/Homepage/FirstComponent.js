import React, { Component } from "react";

import image from "../../components/image/imagesmm.jpg";
import image1 from "../../components/image/image1.jpg";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

export class FirstComponent extends Component {
  render() {
    const style = {
      color: "white",
      backgroundImage: `url(${image})`,

      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "center"
    };
    return (
      //   <div style={style} className="firstComponent">
      //     <div style={{ paddingTop: "300px" }}>
      //       <h1 style={{ fontSize: " 60px", fontweight: "500" }}>
      //         DEVELOPING LEADERS FOR A CHANGING WORLD
      //       </h1>
      //       <p style={{ fontSize: "20px" }}>
      //         JCI provides the framework for young active citizens to create
      //         sustainable impact
      //       </p>
      //       <p style={{ fontSize: "20px" }}>in communities all over the world</p>
      //     </div>
      //   </div>
      <div>
        <div className="heroText" style={style}>
          <h1>DEVELOPING LEADERS FOR A CHANGING WORLD</h1>
          <p>
            JCI provides the framework for young active citizens to create
            sustainable impact
          </p>
          <p> in communities all over the world</p>
        </div>
        <Container fluid="true" style={{ marginTop: "30px" }}>
          <h5>Upcoming Events</h5>
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://jci.cc/en/events/jci/1186"
                  >
                    2020 National Convention
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    2020 JCI Kanazawa Conference
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    2020 JCI Kanazawa Conference
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button id="eventButton" variant="primary">
            All Events
          </Button>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h3 style={{ textAlign: "center", marginTop: "10px" }}>
                Making A Difference Today
              </h3>
              <p style={{ textAlign: "center" }}>
                JCI members see challenges, not as obstacles, but as
                opportunities. We have the audacity to stand up and take action
                for what is just. We create positive change, and together as one
                united team—we amplify our global voice.
              </p>
            </Col>
          </Row>
          <div>
            <Button style={{ marginLeft: "40%" }} variant="primary">
              Become a Member
            </Button>
            <Button style={{ marginLeft: "2%" }} variant="primary">
              Become a Partner
            </Button>
          </div>
          <Card style={{ backgroundColor: "rgb(53, 53, 243)" }}>
            <Card.Body style={{ color: "white", textAlign: "center" }}>
              &copy; JCI Lagos Coral 2019
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default FirstComponent;
