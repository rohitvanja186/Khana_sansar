import React, { useState, useEffect } from 'react';
import './Editdetail.css';
import Navbar2 from '../Navbar2/Navbar2';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Editdetail = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    editDonorName: '',
    editPhoneNumber: '',
    editFoodName: '',
    editFoodType: '',
    editFoodQuantity: '',
    editLocation: '',
    editDescription: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/editrender/${id}`);
        const data = response.data[0]; // Assuming the API returns an array and you want the first element
        setFormData({
          editDonorName: data.donorName,
          editPhoneNumber: data.phoneNumber,
          editFoodName: data.foodName,
          editFoodType: data.foodType,
          editFoodQuantity: data.foodQuantity,
          editLocation: data.location,
          editDescription: data.description
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response =  await axios.post(`http://localhost:3000/edit/${id}`, formData);
      console.log('Form data submitted:', formData);


      if(response.status === 200 && response.data === "Update successful") {

        navigateTo ('/services')
        toast.success('update successfull')
        
      }
      // Optionally, you can navigate the user to another page or show a success message here
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="edit-form-container">
        <h2 className="edit-heading">Edit Food Donation</h2>
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="full_div">
            <div className="left_div">
              <div className="form-group">
                <label htmlFor="editDonorName">Your Name:</label>
                <input
                  type="text"
                  id="editDonorName"
                  name="editDonorName"
                  value={formData.editDonorName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="editPhoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="editPhoneNumber"
                  name="editPhoneNumber"
                  value={formData.editPhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="editFoodName">Food Name:</label>
                <input
                  type="text"
                  id="editFoodName"
                  name="editFoodName"
                  value={formData.editFoodName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="editFoodType">Food Type:</label>
                <select
                  id="editFoodType"
                  name="editFoodType"
                  value={formData.editFoodType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>

            <div className="right_div">
              <div className="form-group">
                <label htmlFor="editFoodQuantity">Quantity (in kg/lbs):</label>
                <input
                  type="number"
                  id="editFoodQuantity"
                  name="editFoodQuantity"
                  value={formData.editFoodQuantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="editLocation">Pickup Location:</label>
                <input
                  type="text"
                  id="editLocation"
                  name="editLocation"
                  value={formData.editLocation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="editDescription">Description (optional):</label>
                <textarea
                  id="editDescription"
                  name="editDescription"
                  rows="4"
                  value={formData.editDescription}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Editdetail;
