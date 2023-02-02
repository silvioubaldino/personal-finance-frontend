import GraphicRender from "../components/GraphicRender";
// import Movements from "../components/Movements";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import ResumedReport from "../components/ResumedReport";
import AccordionBuild from "../components/AccordionBuild";

import "../style/pages/home.css";
import { useEffect } from "react";
import { readStorage } from "../utils/handleLocalStorage";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    const token = readStorage();
    console.log(token);
    if (!token || token.length < 1) {
      history.push('/login');
    }
  }, []);

  return (
    <div className="container-home">
      <header className="container-header">
        <NavBar />
        <Profile />
      </header>
      <main className="container-mainContent">
        <section>
          <ResumedReport />
        </section>
        <section className="container-graphic-movements">
          <GraphicRender />
          <AccordionBuild />
        </section>
      </main>
    </div>
  );
};

export default Home;