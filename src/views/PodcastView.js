import NavBar from "../components/NavBar";
import PodcastHeader from "../components/PodcastHeader";

import headerPic from "../img/coming-soon.png";
import Footer from "../components/Footer";

function PodcastView() {
  return (
    <div className="App">
      <NavBar />

      <PodcastHeader text="Mayra Maldonado Brignoni PODCAST" src={headerPic} />
      <Footer />
    </div>
  );
}
export default PodcastView;
