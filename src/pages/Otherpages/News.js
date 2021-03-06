import React from "react";

import image1 from "../../components/image/image1.jpg";
import image2 from "../../components/image/image2.jpg";
import image3 from "../../components/image/image3.jpg";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

const News = () => {
  return (
    <div>
      <Container fluid={true}>
        <Row id="eventRow">
          <Col>
            <Card>
              <Card.Header as="h5">Jan-20-2020</Card.Header>
              <Row>
                <Col sm={4}>
                  <img id="eventImage" src={image1} alt="Logo" />
                </Col>
                <Col sm={8}>
                  <Card.Body>
                    <Card.Title>NATIONAL PRESIDENT VISITATION</Card.Title>
                    <Card.Text>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </Card.Text>
                    <Button variant="primary">View More</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row id="eventRow">
          <Col>
            <Card>
              <Card.Header as="h5">Jan-01-2020</Card.Header>
              <Row>
                <Col sm={4}>
                  <img id="eventImage" src={image2} alt="Logo" />
                </Col>
                <Col sm={8}>
                  <Card.Body>
                    <Card.Title>FIRST GENERAL ASSEMBLY OF THE YEAR</Card.Title>
                    <Card.Text>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </Card.Text>
                    <Button variant="primary">View More</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row id="eventRow">
          <Col>
            <Card>
              <Card.Header as="h5">Dec-23-2020</Card.Header>
              <Row>
                <Col sm={4}>
                  <img id="eventImage" src={image3} alt="Logo" />
                </Col>
                <Col sm={8}>
                  <Card.Body>
                    <Card.Title>LAGOS CORAL MEMBERS FLOODS OSOGBO</Card.Title>
                    <Card.Text>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </Card.Text>
                    <Button variant="primary">View More</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Card style={{ backgroundColor: "rgb(53, 53, 243)" }}>
        <Card.Body style={{ color: "white", textAlign: "center" }}>
          &copy; JCI Lagos Coral 2019
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
