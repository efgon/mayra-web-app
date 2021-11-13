import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function MisionVision(props) {
  return (
    <Container fluid className="mt-5 mb-5">
      <Row>
        <Col lg>
          <Card
            className="text-center border-0 bg-transparent yellow"
            style={{ width: "100%", fontSize: "1rem" }}
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title as="h2" style={{ fontSize: "2rem" }}>
                {props.title}
              </Card.Title>
              <Card.Text>{props.text1}</Card.Text>
              <Card.Text>{props.text2}</Card.Text>
              <Card.Text>{props.text3}</Card.Text>
              <Card.Text>{props.text4}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="text-center border-0 bg-transparent yellow"
            style={{ width: "100%", fontSize: "1rem" }}
          >
            <Card.Body>
              <Card.Title as="h2" style={{ fontSize: "2rem" }}>
                {props.title2}
              </Card.Title>
              <Card.Text>{props.text5}</Card.Text>
              <Card.Text>{props.text6}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MisionVision;
