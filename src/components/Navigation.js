import { Link } from 'react-router-dom';
import person from './man-person.svg';

const Navigation = () => (
  <nav className="flex justify-between items-center">
    <div className="flex">
      <h1 className="nav-title">Bookstore CMS</h1>
      <div className="nav-links flex items-center">
        <Link to="/" className="nav-link">
          BOOKS
        </Link>
        <Link to="/categories" className="nav-link">
          CATEGORIES
        </Link>
      </div>
    </div>
    <a href="/" className="nav-user">
      <img src={person} width="17" height="17" alt="person" className="nav-person" />
    </a>
  </nav>
);

export default Navigation;
