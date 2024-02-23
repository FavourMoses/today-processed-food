import "./navbar.css";
import logo from "../../assets/images/logo.png";
const Nav = () => {
    return (
      <div className="parent">
        <div className="logodiv">
          <img src={logo} alt="flower" className="imgLogo" />
          <h2 className="navh3">
            Processed F<span>oo</span>d
          </h2>
        </div>
        <div className="middlenav">
          <ul>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    );
}
 
export default Nav;