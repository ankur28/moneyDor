
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Navbar from "./components/Navbar";

function App() {
  const { authIs}
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/login'><Login /></Route>
        <Route exact path='/signup'><Signup /></Route>

      </Switch>
    </Router>
  );
}

export default App;
