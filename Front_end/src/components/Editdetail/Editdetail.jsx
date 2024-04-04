import React from 'react'
import './Editdetail.css'
import Navbar2 from '../Navbar2/Navbar2';

const Editdetail = () => {
  return (
    <>
    <Navbar2 />
    <div className="edit-form-container">
  <h2 className="edit-heading">Edit Food Donation</h2>
  <form className="edit-form">
    <div className='full_div'>
      <div className='left_div'>
        <div className="form-group">
          <label htmlFor="editDonorName">Your Name:</label>
          <input type="text" id="editDonorName" name="editDonorName" required />
        </div>
        <div className="form-group">
          <label htmlFor="editPhoneNumber">Phone Number:</label>
          <input type="tel" id="editPhoneNumber" name="editPhoneNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="editFoodName">Food Name:</label>
          <input type="text" id="editFoodName" name="editFoodName" required />
        </div>
        <div className="form-group">
          <label htmlFor="editFoodType">Food Type:</label>
          <select id="editFoodType" name="editFoodType" required>
            <option value="">Select Type</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      <div className='right_div'>
        <div className="form-group">
          <label htmlFor="editFoodQuantity">Quantity (in kg/lbs):</label>
          <input type="number" id="editFoodQuantity" name="editFoodQuantity" required />
        </div>
        <div className="form-group">
          <label htmlFor="editLocation">Pickup Location:</label>
          <input type="text" id="editLocation" name="editLocation" required />
        </div>
        <div className="form-group">
          <label htmlFor="editDescription">Description (optional):</label>
          <textarea id="editDescription" name="editDescription" rows="4"></textarea>
        </div>
      </div>
    </div>

    <button type="submit" className="submit-button">Save Changes</button>
  </form>
</div>

    </>
  )
}

export default Editdetail;