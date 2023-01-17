import GraphicRender from "../components/GraphicRender";
import Movements from "../components/Movements";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import ResumedReport from "../components/ResumedReport";

import "../style/pages/home.css";

const Home = () => {
  return (
    <div>
      <header className="container-header">
        <NavBar />
        <Profile />
      </header>
      <section>
        <ResumedReport />
      </section>
      <section className="container-graphic-movements">
        <GraphicRender />
        <Movements />
      </section>
    </div>
  );
};

export default Home;