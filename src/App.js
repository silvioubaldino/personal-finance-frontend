import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import NewInfos from './components/NewInfos';
import Movements from './components/Movements';

import './main.css';

function App() {
  return (
    <div>
      <NavBar />
      <NewInfos />
      <Movements />
    </div>
  );
}

export default App;
