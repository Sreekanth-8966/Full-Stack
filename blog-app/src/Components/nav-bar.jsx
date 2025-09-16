import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">← Back to Home</Link><br />
      <Link to="/about">About Us</Link><br /><br />
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
}
