import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/logo.png";
import { ROUTES } from "../../utils/routes";

import "./header.css";

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid navBar">
        <Link className="navBarLogo" to="/">
          <img src={Logo} alt="Little Lemon logo" />
        </Link>
        <button
          className="navBarHamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
        <ul
          className={isNavExpanded ? "navBarLinks expanded" : "navBarLinks"}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {ROUTES.map((route, index) => (
            <li key={index}>
              <Link
                className={pathname === route.path ? "currentLocation" : ""}
                to={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
