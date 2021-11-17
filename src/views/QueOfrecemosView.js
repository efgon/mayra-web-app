import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Servicios1 from "../components/Servicios1";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import FollowMe from "../components/FollowMe";
import FadeInSection from "../components/FadeInSection";

// import headerPic from "../img/coming-soon.png";

function QueOfrecemosView() {
  return (
    <div className="App que-ofrecemos">
      <NavBar />

      <Header text="" src />
      <Card body className="border-white bg-transparent border-0" style={{}}>
        <Card.Title style={{ fontSize: "3rem" }}>
          <em>Talleres</em> basados en las publicaciones:
        </Card.Title>
      </Card>
      <Servicios1
        title1=" Hoy… porque mañana podría ser tarde"
        text11=" 1. Hoy …porque mañana podría ser tarde "
        text12=" 2. La importancia de reconocer y mirar hacia el futuro"
        text13=" 3. ¿Qué tienes que hacer para lograr eso que quieres?"
        text14=" 4. ¿Si no lo haces tú, quien lo hará?"
        text15="5. Retoma tus sueños... "
        title2="Desarrolla tu “Pazciencia”"
        text21="1. ¿Cómo desarrollar tu “pazciencia”?    (un día)"
        text22="2. ¿Qué te gusta de ti?"
        text23='3. ¿Cuándo comenzar a desarrollar la "pazciencia"?'
        text24="4. ¿Por qué se necesita “pazciencia”?"
        text25="5. Otros (según solicitud)"
        title3="Vive con valores"
        text31="1. Hablemos de valores"
        text32="2. ¿Cómo educar sobre valores?"
        text33="3. ¿Qué importancia tienen los valores?"
        text34="4. Ética familiar/profesional"
        text35="5. Si te tratan mal, tú trata con valores…"
        text36="6. Organízate y vive valorando todo"
        text37="7. A.M.A.T.E.T.U.  (porque así darás lo mejor)"
        title4="Técnicas de “Buentrato”"
        text41="1. ¿Por qué tanto maltrato?  Repelamos la maldad"
        text42="2. Aprende a utilizar las R y “bientrata” (Respira, Retrocede, Respeta, Reflexiona, Responsabilízate)"
        text43="3. Comienza con las técnicas desde antes que nazcan tus hijos/as"
        text44="4. La comunicación efectiva está ligada a la actitud"
        text45="5. Siempre hay espacio para mejorar…"
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
export default QueOfrecemosView;
