
import './App.css'
import React from 'react';
import Carousel from '../Carousel/Carousel';

function App() {
  return <h1>Carousel</h1>
}

const images = [
  '/public/images//Vandamor.jpg',
  '/public//images//Vandamor.jpg',
  '//public/////images//Vandamor.jpg',
];

function App() {
  return (
    <div className="App">
      <h1>Paintings</h1>
      <Carousel images={images} />
    </div>
  );
}


export default App

