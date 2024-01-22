import { Link } from "react-router-dom";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.css";

import WhiteLogo from "../../assets/logo-white.png";

import { ROUTES } from "../../utils/routes";

const contacts = [
  { icon: faLocationDot, info: "678 Pisa Ave, Chicago, IL 60611" },
  { icon: faPhone, info: "(312) 593-2744" },
  { icon: faEnvelope, info: "customer@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faTwitter, name: "twitter" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

const Footer = () => {
  return (
    <footer className="siteFooter">
      <div className="container grid">
        <img className="siteFooterLogo" src={WhiteLogo} alt="Little Lemon" />
        <nav className="siteFooterNav">
          <h4>Sitemap</h4>
          <ul>
            {ROUTES.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
