import React from 'react'
import './Services.css'
import Navbar2 from '../Navbar2/Navbar2';
import { Link } from 'react-router-dom';

const Services = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Meat</td>
                        <td>Non-Vegetarian</td>
                        <td>10 kg</td>
                        <td>
                        <Link to="/detail">
                        <button className='view-btn'>View</button>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Rice</td>
                        <td>vegetarian</td>
                        <td>20 kg</td>
                        <td><button className='view-btn'>View</button></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </>
    )
}

export default Services