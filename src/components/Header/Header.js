import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [hideHome, setHideHome] = useState("no");
  //   props.hideHomeOrNot = hideHome;
  const [showingMenu, setShowingMenu] = useState("menu_hide");
  const [nameDisplay, setNameDisplay] = useState("");
  const [hamburgerDisplay, setHamburgerDisplay] = useState("hamburger");
  const ShowMenu = () => {
    setHamburgerDisplay("hide_hamburger");
    setNameDisplay("hide_name");
    setShowingMenu("menu_show");
    setHideHome("yes");
  };
  const HideMenu = () => {
    setShowingMenu("menu_hide");
    setNameDisplay("");
    setHamburgerDisplay("hamburger");
    setHideHome("no");
  };
  return (
    <>
      {props.handleCallBack(hideHome)}
      <div className="mainHeader" style={{position:'sticky'}}>
        <div className={nameDisplay}>
          <h1>Lavneet</h1>
        </div>
        <div className="small">
          <Link to="/" className="link">
            <h4>Home</h4>
          </Link>
          <Link to="/education" className="link">
            <h4>Education / Experience</h4>
          </Link>
          <Link to="/contact" className="link">
            <h4>Contact</h4>
          </Link>
        </div>
        <div className={showingMenu}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <Link to="/" className="link" onClick={HideMenu}>
              <h4>Home</h4>
            </Link>
            <Link to="/education" className="link" onClick={HideMenu}>
              <h4>Education / Experience</h4>
            </Link>
            <Link to="/contact" className="link" onClick={HideMenu}>
              <h4>Contact</h4>
            </Link>
          </div>
          <div className="cross" onClick={HideMenu}>
            <h2 className="x">X</h2>
          </div>
        </div>
        <div className={hamburgerDisplay} onClick={ShowMenu}>
          <img
            src={require("../../assets/images/hamburger_menu.png")}
            style={{ width: "30px" }}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
