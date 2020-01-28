import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import image from "../../components/image/imagesmm.jpg";
const About = () => {
  return (
    <Container>
      <div className="about-section">
        <h1 style={{ paddingTop: "30px" }}>About Us Page</h1>
        <h3> Help us share our story.</h3>
        <p>
          We are young active citizens all over the world. Living,
          communicating, taking action and creating impact in our communities.
          Are you a young active citizen? Do you want to make a difference in
          your community? Join us on this journey of local action for global
          impact.
        </p>
      </div>

      <h2>Meet The Executives and Board</h2>
      <div className="row">
        <div class="column">
          <div class="card">
            <img style={{ height: "200px" }} src={image} alt="Logo" />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">President</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img style={{ height: "200px" }} src={image} alt="Logo" />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Vice President 1</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img style={{ height: "200px" }} src={image} alt="Logo" />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Vice President 2</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <Card style={{ backgroundColor: "rgb(53, 53, 243)" }}>
        <Card.Body style={{ color: "white", textAlign: "center" }}>
          &copy; JCI Lagos Coral 2019
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
