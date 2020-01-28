import React from "react";
import { Row, Col, Form, Container, Button, Card } from "react-bootstrap";

import image from "../../components/image/image3.jpg";
const Connect = () => {
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
    <Container fluid="true">
      <div className="heroText" style={style}>
        <h1>DEVELOPING LEADERS FOR A CHANGING WORLD</h1>
        <p>
          JCI provides the framework for young active citizens to create
          sustainable impact
        </p>
        <p> in communities all over the world</p>
      </div>
      <Row>
        <Col sm={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Your FullName" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Confirm Details" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Card style={{ backgroundColor: "rgb(53, 53, 243)" }}>
        <Card.Body style={{ color: "white", textAlign: "center" }}>
          &copy; JCI Lagos Coral 2019
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Connect;
