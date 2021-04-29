import logo from "./logo.svg";
import "./App.css";

import { Signup1 } from "./screens/Signup1";
import { Loginpg } from "./screens/Loginpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/signup">
          <Signup1/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">
          <Loginpg/>
        </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
