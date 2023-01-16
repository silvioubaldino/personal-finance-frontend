import { Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Report from './pages/Reports';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />

      <Route exact path="/relatorios" component={ Report } />

      <Route exact path="/sobre" component={ About } />

    </Switch>
  );
}

export default App;
