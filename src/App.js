import { Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Report from './pages/Reports';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />

      <Route exact path="/login" component={ Login } />

      <Route exact path="/relatorios" component={ Report } />

      <Route exact path="/sobre" component={ About } />

    </Switch>
  );
}

export default App;
