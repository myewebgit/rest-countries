import React, { useState } from 'react';
// import './Countries.css';

const Country = ({ country }) => {
  const { name, flags, population, area, capital } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    const message = visited
      ? 'I want to visit'
      : 'I have visited this country.';
    setVisited(!visited);
    alert(message);
  };

  return (
    <div className="country-card">
      <h3 className="country-name">{name.common}</h3>
      <img src={flags.png} alt={`${name.common} flag`} />
      <div className="info">
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Area:</strong> {area.toLocaleString()} km²</p>
      </div>
      <button className="visit-button" onClick={handleVisited}>
        {visited ? 'Visited' : 'Going'}
      </button>
    </div>
  );
};

export default Country;
