import React from 'react';
import { NavLink } from 'react-router-dom';
import './AboutUs.css';
import abtImage from '../../img/abt.jpg'; // Import the image

function AboutUs() {
  return (
    <div className='heading'>
      <h1>About us</h1>
      <p>Our mission is to fight hunger by redistributing surplus food to those in need.</p>

      <section className='about-us'>
        <img src={abtImage} alt="About Us" className='reg_img' />
        <div className="content">
          <h2>Khana Sansar Team</h2>
          <p>Our journey at FoodDonation began with a simple yet powerful belief: no one should go to bed hungry.
            We are dedicated to ensuring that surplus food reaches those who need it most.
            Through collaborative efforts and community partnerships,
            we strive to make a meaningful impact on hunger and food waste.
            Together, we can create a world where every meal brings hope and nourishment to those in need.</p>
            <button class="read-more-btn">Read More?</button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
