import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav className="navigator">
      <ul>
        <li>
          <NavLink className="navigator__link" to="/posts">
            😋 Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
