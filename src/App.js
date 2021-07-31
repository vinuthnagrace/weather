import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/Slidebar/SlideBar"
import './App.css';
import CityonePage from "./pages/cityone/CityonePage";
import CityTwo from "./pages/cityone/CityonePage";
import CityThree from "./pages/cityone/CityonePage";
import CityFour from "./pages/cityone/CityonePage";

function App() {
  return (
    <Router>
       <div className="container">
       <SideBar />
    <Switch>
    {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/hyderabad">
          <CityonePage />
          </Route>
          <Route path="/tanuku">
          <CityTwo />
          </Route>
          <Route path="/bhimavaram">
          <CityThree />
          </Route>
          <Route path="/rajahmundry">
          <CityFour />
          </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
