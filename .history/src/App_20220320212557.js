
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div></div>
      <Switch>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login'/>
        <Route exact path='/signup'/>

      </Switch>
    </Router>
  );
}

export default App;
