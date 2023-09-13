import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching data from a sample API endpoint
    fetch('https://api.sampleapis.com/futurama/characters')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Futurama Characters</h1>
      {data ? (
        <ul>
          {data.slice(0, 5).map((character) => (
            <li key={character.id}>
              {character.firstName} {character.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
