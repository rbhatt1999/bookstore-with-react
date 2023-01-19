import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="p-2">
    <Link to="/">Home</Link>
    <Link to="/categories" className="ml-1">
      Categories
    </Link>
  </nav>
);

export default Navigation;
