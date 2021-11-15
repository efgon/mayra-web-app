// import Image from "react-bootstrap/Image";
import backImg from "../img/contactanos.jpg";
import facebookLogo from "../img/facebook-logo.png";
import instagramLogo from "../img/instagram_icon.png";
import youtubeLogo from "../img/Youtube_logo_5.png";
import emailIcon from "../img/email-icon.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
function FollowMe() {
  return (
    <Container
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      {/* <div className="text-center" style={{ fontSize: "2rem" }}>
        Contactanos
      </div> */}
      <Row>
        {/* <Card.Title className='text-center' >
        Siguenos en Nuestras Redes
      </Card.Title> */}
      </Row>
      <Row className="">
        <Col className="" style={{}}>
          {" "}
        </Col>

        <Col className="" style={{}}>
          <Col className="">
            <a href="https://www.facebook.com/mmbrignoni">
              <Card.Img
                className="d-block mx-auto"
                src={facebookLogo}
                style={{ width: "20%" }}
              />
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/mayrambrignoni/?hl=es-la">
              <Card.Img
                className="d-block mx-auto"
                src={instagramLogo}
                style={{ width: "25%" }}
              />
            </a>
          </Col>
        </Col>
        <Col>
          <Col className="" style={{}}>
            <a href="mailto:mayrambrignoni@gmail.com">
              <Card.Img
                className="d-block mx-auto"
                src={emailIcon}
                style={{ width: "25%" }}
              />
              {/* <Col lg={1}>
                <Card.Text className="text-primary">
                  mayrambrignoni@gmail.com
                </Card.Text>
              </Col> */}
            </a>
          </Col>

          <Col>
            <a href="https://youtube.com/">
              <Card.Img
                className="d-block mx-auto"
                src={youtubeLogo}
                style={{ width: "25%" }}
              />
            </a>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default FollowMe;
