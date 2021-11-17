import NavBar from "../components/NavBar";
import PicCarousel from "../components/Carousel";
import FadeInSection from "../components/FadeInSection";
// import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";
import aboutPic from "../img/FOTO JERY.jpg";
import aboutPic2 from "../img/IMG_0660.JPG";
import { Container, Card, Col, Row } from "react-bootstrap";
import SobreMiHeader from "../components/SobreMiHeader";
import SobreMiGallery from "../components/SobreMiGallery";

function SobreMi() {
  return (
    <div className="App sobre-mi ">
      <NavBar />
      <SobreMiHeader src1={aboutPic} src2={aboutPic2} />
      <Container fluid>
        <Card
          body
          className="bg-transparent border-0"
          style={{ fontSize: "1.5rem" }}
        >
          <Card.Text>
            Desde ese momento, Mayra se dedicó a trabajar con libros: ABC para
            Padres, ABC para hijos de Puerto Rico y el Mundo, Aprende buenos
            valores, tesoro para la vida, La virtud del amor para relaciones
            saludables... Ofrece clases en la Universidad Ana G. Méndez, a
            estudiantes de educación en el programa AHORA. Mayra disfruta mucho
            su trabajo como profesora. Además, ofrece talleres, coaching,
            mentorías grupales con diferentes empresas educativas ofreciendo sus
            servicios profesionales de maestra y de mediadora de conflictos
            certificada.
          </Card.Text>
          <Card.Text>
            Han sido muchas las satisfacciones viajando por toda la isla,
            visitando programas de radio, televisión y mediando conflictos tanto
            en talleres como a nivel privado.
          </Card.Text>
          <Card.Text>
            Hoy día, vuelve Mayra con más entusiasmo que nunca, retomando su
            misión de ayudar al prójimo y sobre todo que las familias vivan
            ofreciendo buenas bases de valores como son el amor, respeto,
            educación, responsabilidad y mucho más. Ella sabe que hay una
            necesidad y por eso decidió emprender por medio de la
          </Card.Text>
          Web: <strong>valoresfamiliares-empresariales.com.</strong>
          <Card.Text></Card.Text>
          <Card.Text>
            En este momento está disponible para ofrecer talleres, actividades y
            conferencias con sus libros: Hoy… porque mañana podría ser tarde,
            Vive con Valores, Desarrolla tu “Pazciencia” y Técnicas de
            “Buentrato”.
          </Card.Text>
          <Card.Text>Mayra continúa escribiendo...</Card.Text>
        </Card>
      </Container>
      <PicCarousel />
      <Container fluid className="mb-5">
        <Row>
          <Col>
            <Card
              body
              className="bg-transparent border-0"
              style={{ fontSize: "1.5rem" }}
            >
              <Card.Text>
                La profesora Mayra Maldonado Brignoni, tiene varias
                publicaciones como son: ABC para Padres, ABC para Hijos de
                Puerto Rico y el mundo, La Virtud del Amor para relaciones
                saludables. Durante el mes de abril la profesora Mayra M
                Brignoni, publicó el libro: Hoy… porque mañana podría ser tarde.
                Proximamente publicará los libros Vive con valores, Desarrolla
                tu ¨Pazciencia¨, Técnicas de "Buentrato", los cuales tienen como
                objetivo educar a otros sobre la importancia de hacer hoy, lo
                que no se debe dejar para mañana, como tratar bien a otros,
                vivir en paz y con modales, entre otros. Son muchas las acciones
                que deben realizarse ya, y por dejadez, desconocimiento, falta
                de ánimo y de convencimiento, entre otras razones; se deja de
                actuar rápidamente y cuando se deciden a actuar, muchas veces ya
                es tarde. De las acciones importantes entre otras está: cuidar
                bien a los menores, atender con amor a los ancianos, estudiar
                cuando es el tiempo, cuidar las relaciones matrimoniales para
                que perduren, ser buen cristiano, dar buen ejemplo, entre otras
                acciones.
              </Card.Text>
              <Card.Text>
                En realidad, es un llamado a vivir consciente de la importancia
                de ser responsable, diligente y positivo.
              </Card.Text>
            </Card>
          </Col>
          <Col lg={4} sm={8}>
            <FadeInSection>
              <Card
                className="w-100 shadow  mx-auto mt-3 text-center"
                style={{ fontSize: "2.5rem" }}
              >
                <Card.Body>
                  <Card.Text>
                    Para entrevista, conferencias, presentaciones y escritos se
                    pueden comunicar con su autora escribiendo a:
                  </Card.Text>
                  <Card.Text style={{ fontSize: "1.5rem" }}>
                    <a href="mailto:mayrambrignoni@gmail.com">
                      {" "}
                      mayrambrignoni@gmail.com{" "}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
      <SobreMiGallery />
      <Footer />
    </div>
  );
}
export default SobreMi;
