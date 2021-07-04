import React from "react";
import { Link } from "react-router-dom";
import apple from "../../images/1 25.png";
import google from "../../images/1 26.png";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import privacy from "../../terms/Privacy Policy Good Draft.pdf";
import "./FooterBlock.css";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../constants/MediaQueries";

const FooterBlock = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  if (isMobile) {
    return (
      <div className="FooterBlock">
        <NavBarLogo />
        <div className="FooterBlock-Links">
          <ul className="FooterBlock-Links-List">
            <li>
              <a href="mailto:icontribute.founder@gmail.com">CONTACT US</a>
            </li>
            <li>
              <a href={privacy} download>
                TERMS & CONDITIONS
              </a>
            </li>
            <li>
              <a href={privacy} download>
                PRIVACY POLICY
              </a>
            </li>
          </ul>
        </div>
        <SocialMediaBar />
        <div className="FooterBlock-AppStores">
          <a
            href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-appstore"
          >
            <img src={apple} alt="App Store download" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.icontribute"
            className="footer-appstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={google} alt="Google Play download" />
          </a>
        </div>
        <footer>
          © {new Date().getFullYear().toString()} iContribute. All rights
          reserved.
        </footer>
      </div>
    );
  }

  return (
    <div className="FooterBlock">
      <div className="footer-container">
        <div className="footer-logo">
          <NavBarLogo />
          <SocialMediaBar />
          <div className="footer-appstore-container">
            <a
              href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-appstore"
            >
              <img src={apple} alt="App Store download" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.icontribute"
              className="footer-appstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={google} alt="Google Play download" />
            </a>
          </div>
        </div>

        <div className="footer-list-container">
          {" "}
          <ul className="footer-list">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/volunteers">VOLUNTEERS</Link>
            </li>
            <li>
              <Link to="/organizations">ORGANIZATIONS</Link>
            </li>
            <li>
              <a href="mailto:icontribute.founder@gmail.com">CONTACT US</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <Link to="/ourteam">OUR TEAM</Link>
            </li>
            <li>
              <Link to="/privacy">TERMS {"&"} CONDITIONS</Link>
            </li>
            <li>
              <Link to="/privacy">PRIVACY POLICY</Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/icontribute/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FOLLOW US
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="FooterBlock-Copyright">
        © {new Date().getFullYear().toString()} iContribute. All rights
        reserved.
      </p>
    </div>
  );
};

export default FooterBlock;
