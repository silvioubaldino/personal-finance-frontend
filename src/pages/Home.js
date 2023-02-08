import GraphicRender from "../components/GraphicRender";
// import Movements from "../components/Movements";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";
import ResumedReport from "../components/ResumedReport";
import AccordionBuild from "../components/AccordionBuild";

import "../style/pages/home.css";
import { useEffect, useState } from "react";
import { getTransactionsByPeriod } from "../handlers/transaction";

const mockFrom = "2022-01-01"
const mockTo = "2023-12-30"

const Home = () => {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTransactionsByPeriod(mockFrom, mockTo)
      setMovements(response.data);
    }

    fetchData();
  }, [])
  
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
          <AccordionBuild movements={ movements }/>
        </section>
      </main>
    </div>
  );
};

export default Home;