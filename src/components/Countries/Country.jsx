import React, { useEffect, useState } from 'react';
import './country.css';

const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div className="country-container">
            <h2 className="title">🌍 Country Explorer</h2>
            <div className="countries-grid">
                {countries.map((country) => (
                    <div key={country.cca3} className="country-card">
                        <img
                            src={country.flags.png}
                            alt={`Flag of ${country.name.common}`}
                            className="country-flag"
                        />
                        <p className="country-name">{country.name.common}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Country;
