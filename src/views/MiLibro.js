import NavBar from "../components/NavBar";
import Header from "../components/Header";
// import BodyPic from "../components/BodyPic";
// import PicBody from "../components/PicBody";
// import PicCarousel from "../components/Carousel";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import bookHeaderPic from "../img/image70.jpeg";
import bookPic from "../img/Diseno-sin-titulo.png";
import comingSoonPic from "../img/coming soon amarillo.png";
function MiLibro() {
  return (
    <div className="App libros">
      <NavBar />
      <Header text="Publicaciones" src={""} />
      <Container fluid className="mb-5">
        <Card.Title
          as="h3"
          className="text-center"
          style={{ fontSize: "2rem" }}
        ></Card.Title>
        <Row className="justify-content-lg-around justify-content-around justify-content-sm-center align-content-lg-between align-content-center justify-content-lg-center">
          <Col lg>
            <Card
              className="text-center shadow-lg mt-2 mb-2"
              style={{ width: "100%", fontSize: "1rem" }}
            >
              <Card.Img
                variant="top"
                src={bookPic}
                style={{ height: "50vh" }}
              />
              <Card.Body>
                {/* <Card.Title as="h3" style={{ fontSize: "2rem" }}>
                  "Hoy... Porque Mañana Podria Ser Tarde"
                </Card.Title> */}
                <Card.Text>
                  Ayer era hoy y... ayer prometía ser mañana ... Hoy hablaremos
                  de lo que hicimos ayer y de lo que haremos hoy y quizás mañana
                  ... Si no se pudo ayer y tampoco hoy, lo intentaremos
                  después... Tratemos no dejar lo que queremos hacer hoy...
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.amazon.com/dp/B09LVWKLVG/ref=sr_1_4?keywords=HOY&qid=1637004567&s=digital-text&sr=1-4"
                >
                  OBTENER
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg>
            <Card
              className="text-center shadow-lg mt-2 mb-2"
              style={{ width: "100%", fontSize: "1rem" }}
            >
              <Card.Img
                variant="top"
                src={comingSoonPic}
                style={{ height: "50vh" }}
              />
              <Card.Body>
                <Card.Title as="h3" style={{ fontSize: "1.5rem" }}>
                  Desarrolla tu "Pazciencia"
                </Card.Title>
                <Card.Text>Coming Soon</Card.Text>
                {/* <Button variant="primary">Quiero ver mas!</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="text-center shadow-lg mt-2 mb-2"
              style={{ width: "100%", fontSize: "1rem" }}
            >
              <Card.Img
                variant="top"
                src={comingSoonPic}
                style={{ height: "50vh" }}
              />
              <Card.Body>
                <Card.Title as="h3" style={{ fontSize: "1.5rem" }}>
                  Vive con Valores
                </Card.Title>
                <Card.Text>Coming Soon</Card.Text>
                {/* <Button variant="primary">Quiero ver mas!</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FollowMe />
      <Footer />
    </div>
  );
}
export default MiLibro;
