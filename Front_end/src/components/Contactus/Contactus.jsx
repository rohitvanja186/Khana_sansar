import React from 'react'
import './Contactus.css'
import Navbar2 from '../Navbar2/Navbar2';

const Contactus = () => {
    return (
        <>
            <Navbar2 />

            <div className='fix2 contacts'>
                <form>
                    <div className=' grid grid-two-column'>
                        <div><input className='username' type='text' id='username' placeholder='username'></input></div>
                        <div><input className='email' type='email' id='email' placeholder='Your Email'></input></div>
                    </div>

                    <div>
                        <input className='subject' type='text' id='subject' placeholder='Subject'></input></div>
                    <div>
                        <textarea placeholder='Your Message' style={{ height: 200 }} className='contact_text'></textarea>
                    </div>
                    <button className='btn2' type='submit'>Send</button>
                </form>

            </div>
        </>
    )
}

export default Contactus