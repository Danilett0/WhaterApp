import React from "react";
import WelcomePage from "./Pages/WelcomePage";
import MainPage from "./Pages/MainPage";
import CytyPage from "./Pages/CityPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

          <Route path="/city/:countryCode/:city">
            <CytyPage />
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
