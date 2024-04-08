import React from 'react'
import './Introduction.css'
import { Link } from 'react-router-dom';
import bg from '../../img/bg.jpg'

const Introduction = () => {
  return (


    <>

      <div className='home'>
        <div className='txt'>
          <h2>Join Us in Fighting Hunger!</h2>
          <Link to="/login">
            <button>Donate Now</button>
          </Link>


        </div>
        <img src={bg} className='' alt='' />
      </div>

    </>

  )
}

export default Introduction