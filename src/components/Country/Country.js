import React from 'react';
import './Country.css';

const Country = (props) => {
     // console.log(props.country);
     const { name, capital, population, flags, region, subregion } = props.country;
     return (
          <div className='country'>
               <h2>Name: {name.common}</h2>
               <img src={flags.png} alt="" />
               <h3>Capital: {capital}</h3>
               <p>Population: {population}</p>
               <p>Region: {region}</p>
               <p><small>Sub Region: {subregion}</small></p>
          </div>
     );
};

export default Country;