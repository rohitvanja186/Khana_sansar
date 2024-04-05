import React, { useEffect, useState } from 'react';
import './Detail.css';
import Navbar2 from '../Navbar2/Navbar2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/detail/${id}`);
        setResult(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      <Navbar2 />
      <div className="detail-container">
        <h2>Food Donation Details</h2>
        {result && result[0] && (
          <div>
            <div className="detail-item">
              <strong>Name:</strong> {result[0].donorName}
            </div>
            <div className="detail-item">
              <strong>Food Name:</strong> {result[0].foodName}
            </div>
            <div className="detail-item">
              <strong>Food Type:</strong> {result[0].foodType}
            </div>
            <div className="detail-item">
              <strong>Food Quantity:</strong> {result[0].foodQuantity}
            </div>
            <div className="detail-item">
              <strong>Pickup Location:</strong> {result[0].pickupLocation}
            </div>
            <div className="detail-item">
              <strong>Description:</strong> {result[0].description}
            </div>
            <div className="btn-container">
              <Link to="/edit">
                <button className="edit-btn">Edit</button>
              </Link>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
