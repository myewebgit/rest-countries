import React, { useEffect, useRef, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [highlightCountry, setHighlightCountry] = useState('');
  const countryRefs = useRef({}); // key: country name, value: ref

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  const handleSearch = () => {
    const name = searchText.trim().toLowerCase();
    const ref = countryRefs.current[name];
    if (ref) {
        setHighlightCountry(name);
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      alert('Country not found!');
    }
  };
  return (
    <div className="countries-container">
      <div className="headline">
  <h2>🌍 Explore the World: Discover Countries at a Glance</h2>
  <p className="headline-description">
    Search, explore, and mark the countries you’ve visited or plan to visit.
  </p>
</div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter country name..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="countries-grid">
        {countries.map(country => {
          const countryName = country.name.common.toLowerCase();
          return (
            <div
              key={country.cca3}
              ref={el => (countryRefs.current[countryName] = el)}
              className={highlightCountry === countryName ? 'highlighted' : ''}
            >
              <Country country={country} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
