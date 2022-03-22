import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' element={<Home />}
        <Route exact path='/login' element={<Login />}
        <Route exact path='/signup' element={<Home />}

      </Switch>
    </Router>
  );
}

export default App;
