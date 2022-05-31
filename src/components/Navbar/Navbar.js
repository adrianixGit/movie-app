import { Link } from 'react-router-dom';
import './Navbar.scss';
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">PMovie</h1>
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/home-page">Home Page</Link>
        </li>
        <li className="navbar__link">
          <Link to="/popular">Popular</Link>
        </li>
      </ul>
      <input className="navbar__search" type="text" />
    </nav>
  );
}

export default Navbar;
