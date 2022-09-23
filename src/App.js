import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState([]);
  const [info, setInfo] = useState([]);


  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/capsules')
      .then(response => response.json())
      .then(data => setCount(data));
  }, []);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/info')
      .then(response => response.json())
      .then(data => setInfo(data));
  }, []);


  return (
    <>
      <div>
        <h1>SpaceX Capsules</h1>
        {count.map((item) => (
          <div key={item.capsule_serial}>
            <h2>{item.capsule_serial}</h2>
          </div>
        ))}
      </div>
      <div>
        <h1>SpaceX Info</h1>
          <div>
            <h2>{info.name}</h2>
          </div>
      </div>
    </>
  );
};   

export default App;
