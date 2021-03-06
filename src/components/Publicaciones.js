import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
function Publicaciones(props) {
  return (
    <Container>
      <Card.Title as="h3" className="text-center" style={{ fontSize: "2rem" }}>
        {props.containerTitle}
      </Card.Title>
      <FadeInSection>
        <Row className="justify-content-lg-around justify-content-around justify-content-sm-center align-content-lg-between align-content-center justify-content-lg-center">
          <Col lg={4}>
            <Card
              className="text-center shadow-lg d-block mx-auto mt-5 bg-transparent border-0"
              style={{ width: "100%", fontSize: "1rem" }}
            >
              <Card.Img
                variant="top"
                src={props.src}
                style={{ height: "65vh" }}
              />
              <Card.Body className="bg-white">
                <Card.Title as="h3" style={{ fontSize: "1.5rem" }}>
                  {props.title}
                </Card.Title>
                <Card.Text>{props.text1}</Card.Text>
                <Button
                  variant="warning"
                  href="https://www.amazon.com/dp/B09LVWKLVG/ref=sr_1_4?keywords=HOY&qid=1637004567&s=digital-text&sr=1-4"
                >
                  OBTENER
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className="text-center shadow-lg d-block mx-auto mt-5 bg-transparent border-0"
              style={{ width: "100%", fontSize: "1rem" }}
            >
              <Card.Img
                variant="top"
                src={props.src2}
                style={{ height: "65vh" }}
              />
              <Card.Body className="bg-white">
                <Card.Title as="h3" style={{ fontSize: "1.5rem" }}>
                  {props.title2}
                </Card.Title>
                <Card.Text>{props.text2}</Card.Text>
                {/* <Button variant="primary">Quiero ver mas!</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </FadeInSection>
    </Container>
  );
}

export default Publicaciones;
