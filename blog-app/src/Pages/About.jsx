import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This page contains information about the blog application and its creators.</p>

      
      <Link to="/">← Back to Home</Link><br></br>
      <Link to="/contact">← Contact Us</Link>
      
    </div>
  );
}

export default About;
