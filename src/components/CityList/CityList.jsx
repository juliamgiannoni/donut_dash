import React from 'react';
import {Link} from 'react-router-dom';
import './CityList.css';

const CityList = (props) => {
  return (
    <div className='CityList'>
      {props.cities.map(city =>
        <div key={city.name} className='CityList-Image-Container col-xs-6 col-sm-4'>
          <img className='CityList-Image' src={city.image} alt='cities' />
          <p className='CityList-Caption'><Link to={`/city/${city.name}`}>{city.name}</Link></p>
        </div>
      )}
    </div>
  )
}

export default CityList;