import React, { useState } from 'react';
import Data from './City.json';

const Search_filter = () => {
  const [search, setsearch] = useState('');

  // Filter cities based on search input
  const filteredCities = Data.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Enter City:</h1>
      <input
        type="text"
        value={search}
        onChange={(event) => setsearch(event.target.value)}
      />
      <br />
      {filteredCities.map((city, index) => (
        <div key={index} style={{ border: '1px solid black' }}>
          {city.name}
        </div>
      ))}
    </div>
  );
};

export default Search_filter;
