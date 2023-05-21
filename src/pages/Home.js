// import Movements from "../components/Movements";
import NavBar from "../components/NavBar";

import {useEffect} from "react";
import {useHistory} from "react-router";

import {readStorage} from "../utils/handleLocalStorage";
import NewInfos from "../components/NewInfos";
import Movements from "../components/Movements";
import '../main.css';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    const token = readStorage();
    if (!token || token.length < 1) {
      history.push('/login');
    }
  }, []);

  return (
      <div>
        <NavBar />
        <NewInfos />
        <Movements />
      </div>
  );
};

export default Home;