import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' element={<Home />}
        <Route exact path='/login' element={<Login />}
        <Route exact path='/signup' element={<Signup />}

      </Switch>
    </Router>
  );
}

export default App;
