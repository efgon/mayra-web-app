import NavBar from "../components/NavBar";
import Header from "../components/Header";
import PicBody from "../components/PicBody";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";
import profilePic from "../img/image44.jpeg";
import bookPic from "../img/Diseno-sin-titulo.png";
import bookPic2 from "../img/coming soon amarillo.png";
import Publicaciones from "../components/Publicaciones";
import QueOfrecemos from "../components/QueOfrecemos";
import FadeInSection from "../components/FadeInSection";
import { Card } from "react-bootstrap";

function HomeView() {
  return (
    <div className="App home">
      <NavBar />

      <Header text="Valores Familiares-Empresariales" />
      <PicBody
        src={profilePic}
        text2=""
        title=""
        text1="Nos dedicamos a educar y reeducar sobre valores. Las buenas formas de vivir, tratar y esperar que con el ejemplo otros aprendan la ética de la sana convivencia. Llevamos nuestra educación con publicaciones, talleres y más."
      />
      <Card
        className="text-center border-0 shadow mb-sm-5 mt-lg-3 mb-5"
        style={{
          fontSize: "1.5rem",
          lineHeight: "2",
          backgroundColor: "yellow",
        }}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title as="h2" style={{ fontSize: "1.5rem" }}></Card.Title>
          <Card.Text>
            <em>
              Nos dedicamos a educar y reeducar sobre valores. Las buenas formas
              de vivir, tratar y esperar que con el ejemplo otros aprendan la
              ética de la sana convivencia. Llevamos nuestra educación con
              publicaciones, talleres y más.
            </em>
          </Card.Text>
        </Card.Body>
      </Card>

      <Publicaciones
        containerTitle="Publicaciones "
        src={bookPic}
        text1="Ayer era hoy y... ayer prometía ser mañana ... Hoy hablaremos de lo que hicimos ayer y de lo que haremos hoy y quizás mañana ... Si no se pudo ayer y tampoco hoy, lo intentaremos después... Tratemos no dejar lo que queremos hacer hoy... "
        src2={bookPic2}
        title2='Desarrolla tu "Pazciencia"'
        text2="Coming Soon"
      />

      <QueOfrecemos
        title1="¿Que Ofrecemos?"
        text2="Talleres"
        text3="Clases y Tutorías"
        text4="Conferencias"
        text9="Más"
        title5="¿Para Quién?"
        text6="Para todo integrante en la Familia"
        text7="Familia Empresarial"
        text8=""
        text10=""
      />
      <FadeInSection>
        <Card
          className="w-25 shadow  mx-auto mt-3 mb-3 text-center"
          style={{ fontSize: "2.5rem" }}
        >
          <Card.Body>
            <Card.Text>
              Para entrevista, conferencias, presentaciones y escritos se pueden
              comunicar con su autora escribiendo a:
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
      <FollowMe />
      <Footer />
    </div>
  );
}
export default HomeView;
