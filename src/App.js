import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import NewInfos from './components/NewInfos';
import Movements from './components/Movements';

function App() {
  return (
    <div style={{ background: '#52001A', height: '100vh' }}>
      <NavBar />
      <NewInfos />
      <Movements />
    </div>
  );
}

export default App;
