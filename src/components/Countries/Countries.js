import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';
const Countries = () => {
     const [countries, setCountries] = useState([])
     useEffect(() => {
          fetch('https://restcountries.com/v3.1/all')
               .then(res => res.json())
          .then(data => setCountries(data))
     }, [])
     return (
          <div>
               {
                    countries.map(country =>
                         // console.log(country)
                         <Country
                         key={country.ccn3}
                         name={country.name.common}
                         population={country.population}
                         ></Country>
                    )
               }
          </div>
     );
};

export default Countries;