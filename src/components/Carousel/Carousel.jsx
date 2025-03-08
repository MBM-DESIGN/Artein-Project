
import React, { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel() {
  const [paintingObjectIDs, setPaintingObjectIDs] = useState([]);
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0);
  const [paintingDetails, setPaintingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchEndpoint = 'https://collectionapi.metmuseum.org/public/collection/v1/search';
  const objectsEndpoint = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

  useEffect(() => {
    async function searchPaintings() {
      try {
        const response = await fetch(`${searchEndpoint}?q=painting&hasImages=true`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPaintingObjectIDs(data.objectIDs || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    searchPaintings();
  }, []);

  useEffect(() => {
    async function getPaintingDetails(objectID) {
      if (!objectID) return;
      try {
        const response = await fetch(`${objectsEndpoint}/${objectID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPaintingDetails(data);
      } catch (err) {
        setError(err.message);
      }
    }

    if (paintingObjectIDs.length > 0) {
      getPaintingDetails(paintingObjectIDs[currentPaintingIndex]);
    }
  }, [paintingObjectIDs, currentPaintingIndex]);

  const handlePrev = () => {
    setCurrentPaintingIndex((prevIndex) =>
      prevIndex === 0 ? paintingObjectIDs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPaintingIndex((prevIndex) =>
      prevIndex === paintingObjectIDs.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!paintingDetails) return null;

  return (
    <div>
      {paintingDetails.primaryImageSmall && (
        <img
          src={paintingDetails.primaryImageSmall}
          alt={paintingDetails.title || 'Pintura sin título'}
        />
      )}
      <p>{paintingDetails.title || 'Sin título'}</p>
      <button onClick={handlePrev} disabled={currentPaintingIndex === 0}>
      Previous
      </button>
      <button
        onClick={handleNext}
        disabled={paintingObjectIDs.length <= 1}
      >
      Next
      </button>
    </div>
  );
}

export default Carousel;