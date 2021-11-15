import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import MisionVision from "./MisionVision";

function PicBody(props) {
  return (
    <Container fluid className="">
      <Row className="justify-content-lg-around align-content-lg-between">
        <Col lg={4}>
          <Card className="text-center bg-transparent border-0" style={{}}>
            <Card.Img variant="top" src={props.src} style={{}} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>{props.text2}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <MisionVision
            title="Misión"
            text1="Reeducar y educar sobre valores."
            text2="Las formas de tratarse en familia."
            text3="Trato a comunidades, amistades, personas conocidas y no conocidas."
            text4="Comportamiento en diferentes lugares (hogar, vecinos, trabajos…)"
            title2="Objetivo"
            text5="Que las familias eduquen y ofrezcan "
            text6="el mejor ejemplo a sus menores y jóvenes."
            text7="Que todos se traten con valores"
            text8="como son el respeto, amor, dignidad, tolerancia…"
          />
        </Col>
      </Row>
    </Container>
  );
}
export default PicBody;
