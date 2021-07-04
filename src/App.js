import React from "react";

import NavBar from "./components/Navbar/NavBar";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import "./css/Buttons.css";
import "./css/PageMargin.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import VolunteersScreen from "./screens/VolunteersScreen";
import OrganizationScreen from "./screens/OrganizationScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import OurTeamScreen from "./screens/OurTeamScreen";
import GetInTouchBlock from "./components/GetInTouchBlock/GetInTouchBlock";
import ScrollToTop from "./components/ScrollToTop";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "./constants/MediaQueries";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  return (
    <Router basename="/">
      <ScrollToTop />
      <div
        className="site-container"
        style={{ width: isMobile ? "" : "1300px" }}
      >
        <NavBar />
        <div className="site-margin">
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/volunteers" exact component={VolunteersScreen} />
            <Route path="/organization" exact component={OrganizationScreen} />
            <Route path="/ourteam" exact component={OurTeamScreen} />
            <Route path="/privacy" exact component={PrivacyPolicyScreen} />
            <Route path="/TOS" exact component={PrivacyPolicyScreen} />
          </Switch>
        </div>
        <GetInTouchBlock />
        <FooterBlock />
      </div>
    </Router>
  );
};

export default App;
