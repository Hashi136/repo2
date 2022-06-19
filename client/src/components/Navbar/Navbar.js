// ------ Navbar  ------
import React, { useState, useContext,useEffect } from "react";
import "./Navbar.scss";

//Imports
import { UserContext } from "../../App";

//Packages
import { Link, NavLink } from "react-router-dom";
import io from "socket.io-client";

//Images
import profilePic from "../../assets/images/other/profilePicture.jpg";
import cresteraLogo from "../../assets/images/logos/Crestera-Logo.png";
import ProfilePic from "../../assets/images/other/profilePicture.jpg";
import CresteraLogo from "../../assets/images/logos/Crestera-Logo.png";
import CresteraBoardLogo from "../../assets/images/logos/Crestera-Board.png";
import CresteraNoteLogo from "../../assets/images/logos/Crestera-Note.png";
import CresteraVaultLogo from "../../assets/images/logos/Crestera-Vault.png";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faClose } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";

function Navbar({ page }) {
  const { state, dispatch } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const setLogo = () => {
    if (page == "board") {
      return CresteraBoardLogo;
    } else if (page == "note") {
      return CresteraNoteLogo;
    } else if (page == "vault") {
      return CresteraVaultLogo;
    } else {
      return CresteraLogo;
    }
  };

    //Estblishing Web Socker
    // useEffect(() => {
    //   const socket = io("http://localhost:8000");
    //   console.log(socket);
    // }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__menu">
            <div
              className="navbar__menu__container"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faClose} />
              )}
            </div>
          </div>
          <div className="navbar__logo">
            <img src={setLogo()} alt="" />
          </div>
          <div className="navbar__username">
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <p>{`${state?.firstName} ${state?.lastName}`}</p>
            </Link>
          </div>

          {/*Navbar Notification  */}
          <div className="navbar__notification">
            <div className="navbar__notification__container">
              <Link to="/Notification"><FontAwesomeIcon icon={faBell} className="notification__icon"/></Link>
              <div className="notification__counter">2</div>
            </div>
          </div>

          <div className="navbar__userimage">
            <Link to="/profile">
              <img src={state?.image} alt="" />
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="navbar__sidebar">
            <Sidebar page={page} />
            <div className="sidebar__rightBorder"></div>
          </div>
        )}
      </div>
      <div className="navbar__filler"></div>
    </>
  );
}

export default Navbar;
