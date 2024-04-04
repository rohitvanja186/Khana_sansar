import React from 'react'
import './Detail.css'
import Navbar2 from '../Navbar2/Navbar2';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <>
    <Navbar2 />    

    <div className="detail-container">
      <h2>Food Donation Details</h2>
      <div className="detail-item">
        <strong>Name:</strong> John Doe
      </div>
      <div className="detail-item">
        <strong>Phone Number:</strong> 123-456-7890
      </div>
      <div className="detail-item">
        <strong>Food Name:</strong> Rice
      </div>
      <div className="detail-item">
        <strong>Food Type:</strong> Vegetarian
      </div>
      <div className="detail-item">
        <strong>Food Quantity:</strong> 20 kg
      </div>
      <div className="detail-item">
        <strong>Pickup Location:</strong> New York, NY
      </div>
      <div className="detail-item">
        <strong>Description:</strong> This is a donation for rice.
      </div>
      <div className="btn-container">
        <Link to="/edit">
        <button className="edit-btn">Edit</button>
        </Link>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
    </>
  )
}

export default Detail;