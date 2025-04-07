import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const hamburger = <FontAwesomeIcon icon={faBars} color="white" />;
  const user = <FontAwesomeIcon icon={faUser} />;

  return (
    <header className={styles.header}>
      <nav className="navbar navbar-dark">
        <div className="container-fluid col justify-content-start">
          <button type="button" className="btn border-0 shadow-none">
            {hamburger}
          </button>
          <Link to={"/dashboard"} className="navbar-brand h2 mb-0">
            Sistema de RH
          </Link>
        </div>
        <div
          className={`${styles.user} container-fluid col justify-content-end`}
        >
          <button
            className="btn btn-light justify-content-center shadow-none"
            type="button"
          >
            {user}
          </button>
        </div>
      </nav>
    </header>
  );
}
