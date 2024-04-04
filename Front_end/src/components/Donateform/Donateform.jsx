// import React from 'react'
// import './Donateform.css'
// import Navbar2 from '../Navbar2/Navbar2';

// const Donateform = () => {


//   const [formData,
//     setFormData] = useState({
//       donorName: "",
//       phoneNumber: "",
//       foodName: "",
//       foodType: "",
//       foodQuantity: "",
//       location: "",
//       description: ""
//     });

//   const userId = Cookies.get('token');
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:3000/donate", formData, {
//         headers: {
//           Authorization: Bearer ${ userId }
                
//             }
//         });
//   console.log(response.data); // Assuming your backend returns some data
//   // Reset form after successful submission
//   setFormData({
//     donorName: "",
//     phoneNumber: "",
//     foodName: "",
//     foodType: "",
//     foodQuantity: "",
//     location: "",
//     description: ""
//   });
// } catch (error) {
//   console.error('Error occurred:', error);
//   // Handle error if needed
// }
// };




// return (
//   <>
//     <Navbar2 />
//     <div className="donate-form-container">
//       <h2 className="donate-heading">Donate Food</h2>
//       <form className="donate-form" onSubmit={handleSubmit}>
//         <div className='full_div'>
//           <div className='left_div'>
//             <div className="form-group">
//               <label htmlFor="donorName">Your Name:</label>
//               <input type="text" id="donorName" name="donorName" value={formData.donorName} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phoneNumber">Phone Number:</label>
//               <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="foodName">Food Name:</label>
//               <input type="text" id="foodName" name="foodName" value={formData.foodName} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="foodType">Food Type:</label>
//               <select id="foodType" name="foodType" value={formData.foodType} onChange={handleChange} required>
//                 <option value="">Select Type</option>
//                 <option value="vegetarian">Vegetarian</option>
//                 <option value="non-vegetarian">Non-Vegetarian</option>
//                 <option value="both">Both</option>
//               </select>
//             </div>

//           </div>





//           <div className='right_div'>
//             <div className="form-group">
//               <label htmlFor="foodQuantity">Quantity (in kg/lbs):</label>
//               <input type="number" id="foodQuantity" name="foodQuantity" value={formData.foodQuantity} onChange={handleChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="location">Pickup Location:</label>
//               <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required/>
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description (optional):</label>
//               <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" required></textarea>
//             </div>
//           </div>
//         </div>



//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>

//   </>


// )
// }

// export default Donateform


import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Assuming you have a library for handling cookies
import './Donateform.css';
import Navbar2 from '../Navbar2/Navbar2';

const Donateform = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    phoneNumber: "",
    foodName: "",
    foodType: "",
    foodQuantity: "",
    location: "",
    description: ""
  });

  const userId = Cookies.get('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/donate", formData, {
        headers: {
          Authorization: `Bearer ${userId}`
        }
      });
      console.log(response.data); // Assuming your backend returns some data
      // Reset form after successful submission
      setFormData({
        donorName: "",
        phoneNumber: "",
        foodName: "",
        foodType: "",
        foodQuantity: "",
        location: "",
        description: ""
      });
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle error if needed
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="donate-form-container">
        <h2 className="donate-heading">Donate Food</h2>
        <form className="donate-form" onSubmit={handleSubmit}>
          <div className='full_div'>
            <div className='left_div'>
              <div className="form-group">
                <label htmlFor="donorName">Your Name:</label>
                <input type="text" id="donorName" name="donorName" value={formData.donorName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="foodName">Food Name:</label>
                <input type="text" id="foodName" name="foodName" value={formData.foodName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="foodType">Food Type:</label>
                <select id="foodType" name="foodType" value={formData.foodType} onChange={handleChange} required>
                  <option value="">Select Type</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>
            <div className='right_div'>
              <div className="form-group">
                <label htmlFor="foodQuantity">Quantity (in kg/lbs):</label>
                <input type="number" id="foodQuantity" name="foodQuantity" value={formData.foodQuantity} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="location">Pickup Location:</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description (optional):</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" required></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Donateform;
