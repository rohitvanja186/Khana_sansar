import React, { useEffect, useState } from 'react';
import './Detail.css';
import Navbar2 from '../Navbar2/Navbar2';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Detail = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const navigateTo = useNavigate();
  const userid = Cookies.get('token');


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

  


  const handleDelete = async () => {
    try {
      const deleted = await axios.delete(`http://localhost:3000/delete/${id}`);

      if (deleted && deleted.data === 'success delete') {
        navigateTo('/services');
        setTimeout(() => {
          toast.success('Your post has been deleted successfully');
        }, 200);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };





  const redirectto = navigateTo(`/edit/${result[0].ID}`)

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
              <strong>Pickup Location:</strong> {result[0].location}
            </div>
            <div className="detail-item">
              <strong>Description:</strong> {result[0].description}
            </div>
           
              <div className="btn-container">
               
                  <button className="edit-btn" onClick ={redirectto}>Edit</button>
              
                <button className="delete-btn" onClick={handleDelete}>
                  Delete
                </button>
              </div>
          
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;


