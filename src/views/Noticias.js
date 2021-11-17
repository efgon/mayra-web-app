import NavBar from "../components/NavBar";
import PodcastHeader from "../components/PodcastHeader";

import Footer from "../components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";

function Noticias() {
  return (
    <div className="App sobre-mi ">
      <NavBar />

      <PodcastHeader text="" src={""} />
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "3rem" }}>Noticias</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Algunas noticias sobre valores familiares y Mayra M Brignoni
                </Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "3rem" }}>Educación</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Artículos sobre educación de valores
                </Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Noticias;
