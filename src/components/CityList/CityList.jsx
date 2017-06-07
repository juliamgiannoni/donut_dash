import React from 'react';
import {Link} from 'react-router-dom';
import './CityList.css';

const CityList = (props) => {
  return (
    <div className='CityList'>
      {props.cities.map(city =>
        <div key={city.name} className='CityList-Image-Container col-xs-6 col-sm-4'>
          <Link to={`/city/${city.name}`}><img className='CityList-Image' src={city.image} alt='cities' /></Link>
          <p className='CityList-Caption'>{city.name}</p>
        </div>
      )}
    </div>
  )
}

export default CityList;