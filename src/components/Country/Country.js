import React from 'react';
import './Country.css';

const Country = (props) => {
     // console.log(props);
     const {name, population} = props;
     return (
          <div className='country'>
               <h2>Country name: {name}</h2>
               <h3>Population: {population }</h3>
          </div>
     );
};

export default Country;