import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
        <h1>Welcome to the Website</h1>
        <img src="" alt="SRIT College" width="600" height="400"/>
        <p>This is our college website. Welcome to SRIT
This Society was established by Founder-cum-Secretary Sri Aluru Sambasiva Reddy in November 2007 in memory of his mother, Late Smt. Aluru Narayanamma, to give shape to his firm belief that “EDUCATION IS A KEY ENABLER FOR PROGRESS”. This belief has shaped his entire life – he himself excelled in his scholastic years and then became a tutor, teaching students not only his subject but also imparting higher human values. As his career progressed, he wanted to ensure that maximum students from rural and developing areas could de</p>
        <Link to="/about">About Us</Link><br></br>
        <Link to="/contact">Contact Us</Link>
        
        </div>
    );
    }

export default Home;