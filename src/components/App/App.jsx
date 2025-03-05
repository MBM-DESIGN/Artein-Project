
import './App.css'
import React from 'react';
import React, { useState, useEffect } from 'react';

const artworksList = document.querySelector("#art-works-list")

async function getartworks() {
  const response = await fetch("https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=cbf87a29-645a-44c2-b01d-78c372374c9e")
  const data = await response.json()
  const artworks = data["results"]

  artworks.forEach((artwork) => {
    artworksList.innerHTML +=
      `
        <div>
          <h2>${artwork.name}</h2>
          <img src="${artwork.image}" alt=" ${artwork.name}"/>
        </div>
      `
  })
}
getartworks()

/*Importamos useState y useEffect de React.
useState:s se utiliza para mantener el estado de los datos de las obras de arte.
useEffect: se utiliza para realizar la llamada a la API cuando el componente se monta.
fetch: se utiliza para realizar la petición a la API.
artworks: este estado almacena los datos recibidos.
Mapeamos los datos de artworks para mostrar los títulos de las obras de arte en una lista.
function App() {
  const [artworks, setArtworks] = useState([]);
  const apiKey = 'cbf87a29-645a-44c2-b01d-78c372374c9e'; // mi clave de API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.harvardartmuseums.org/object?apikey=${apiKey}`
        );
        const data = await response.json();
        setArtworks(data.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  return (
    <div className="App">
      <h1>Works of art from the Harvard Museum</h1>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/

