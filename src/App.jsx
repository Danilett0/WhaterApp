import React from "react";
import WelcomePage from "./Pages/WelcomePage";
import MainPage from "./Pages/MainPage";
import CytyPage from "./Pages/CityPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AppFrame from "./Components/AppFrame/AppFrame";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <Router>

        <Switch>

          <Route exact path="/">
            <WelcomePage />
          </Route>

          <Route path="/main">
            <MainPage />
          </Route>

          <Route path="/city">
            <CytyPage />
          </Route>

          <Route path="/appframe">
            <AppFrame />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>

        </Switch>

      </Router>
    </div>
  );
};

export default App;
