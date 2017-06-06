import React from 'react';
import {Link} from 'react-router-dom';
import './City.css';

const City = (props) => {
  return (
    <div className='City'>
      {props.cities.map(city =>
        <div key={city.name} className='City-Image-Container col-xs-6 col-sm-4'>
          <img className='City-Image' src={city.image} alt='cities' />
          <p className='City-Caption'><Link to='/city/name'>{city.name}</Link></p>
        </div>
      )}
    </div>
  )
}

export default City;