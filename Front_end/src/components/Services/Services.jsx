import React, { useEffect, useState } from 'react';
import './Services.css';
import Navbar2 from '../Navbar2/Navbar2';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Services = () => {
    const [donationData, setDonationData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/getDonationData");
                // Set the donation data received from the backend to the state
                setDonationData(response.data);
            } catch (error) {
                // Handle errors here
                console.error("Error fetching data:", error);
            }
        }

        getData();

    }, []); // Passing an empty dependency array to run this effect only once on component mount

    return (
        <>
            <Navbar2 />

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Food Name</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {donationData.map((donation, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{donation.foodName}</td>
                            <td>{donation.foodType}</td>
                            <td>{donation.foodQuantity}</td>
                            <td>
                                <Link to="/detail">
                                    <button className='view-btn'>View</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Services;
