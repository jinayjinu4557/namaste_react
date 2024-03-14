import { FaShoppingCart } from "react-icons/fa";
import { logoUrl } from "../utils/Constants";

const Header = () => {
  return (
    <div className="header-class">
      <div className="logo-class">
        <img
          className="logo"
          src={logoUrl}
          alt="food app logo"
        />
      </div>
      <div className="nav-item">
        <ul className="nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <FaShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
