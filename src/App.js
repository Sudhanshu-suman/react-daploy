import React from 'react';
import profileImage from './img/MY PK.jpg';
import nature from './img/nature.jpg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       {/* <div  styles={{ backgroundImage:`url(${nature.jpg})` }}> */}
     <h1>My React App</h1>
     <h2>Author:Sudhanshun Suman</h2>
     
     <img  style={{borderRadius:"1000px"}} src={profileImage} alt="profile-image" />
    {/* </div> */}
    </div>
  );
}

export default App;
