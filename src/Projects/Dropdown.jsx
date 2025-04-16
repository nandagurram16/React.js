import React, { useState } from "react";

const Dropdown = () => {
  const data = [
    {
      city: "New York",
      places: ["Central Park", "Times Square"]
    },
    {
      city: "Paris",
      places: ["Eiffel Tower", "Louvre Museum"]
    },
    {
      city: "Tokyo",
      places: ["Shibuya Crossing", "Tokyo Tower"]
    }
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [places, setPlaces] = useState([]);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    const found = data.find((item) => item.city === city);
    setPlaces(found ? found.places : []);
  };

  return (
    <div>
      <div>
        <label>Select City:</label>
        <select onChange={handleCityChange} value={selectedCity}
        >
          <option value="">-- Choose City --</option>
          {data.map((item, index) => (
            <option key={index} value={item.city}>
              {item.city}
            </option>
          ))}
        </select>
      </div>
      <br/>
      {places.length > 0 && (
        <div>
          <label>Select Place:</label>
          <select>
            <option value="">-- Choose Place --</option>
            {places.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Dropdown;