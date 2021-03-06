import React from 'react';
import './Country.css'

const Country = props => {
    // console.log(props.country)
    const { name, area, region, population, flags } = props.country;
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;