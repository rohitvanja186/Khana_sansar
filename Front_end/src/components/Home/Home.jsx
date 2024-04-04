import React from 'react';
import './Home.css';
import home from '../../img/home.png'; // Import the image

const Home = () => {
  return (
    <div className="homeback">
      <img src={home} alt="Home Image" className='home_img' /> {/* Use the imported image */}

      <div className='message'> {/* Corrected the classname attribute */}
        <h1>
          Nourishing Communities,<br />
          One Donation at a Time.
        </h1>

        <p style={{ color: 'green', marginLeft: '15rem' }}>
          Your surplus becomes someone's sustenance.<br />
          Together, we can end hunger and waste.
        </p>

        <p>
          Join the movement of compassionate hearts<br />
        </p>

        <a href="/login">
          <button className="btn">Donate Now</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
