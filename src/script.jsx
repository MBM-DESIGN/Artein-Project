document.addEventListener('DOMContentLoaded', () => {
  const paintingsContainer = document.getElementById('current-painting'); // Ahora apunta al div que mostrará la pintura actual
  const prevButton = document.getElementById('prev-painting');
  const nextButton = document.getElementById('next-painting');
  const searchEndpoint = 'https://collectionapi.metmuseum.org/public/collection/v1/search';
  const objectsEndpoint = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

  let paintingObjectIDs = []; // Array para guardar los Object IDs de las pinturas
  let currentPaintingIndex = 0; // Índice de la pintura actual en el carrusel

  // Función para buscar Object IDs de pinturas (igual que antes)
  async function searchPaintings() {
      // ... (misma función searchPaintings de antes) ...
      try {
          const response = await fetch(`${searchEndpoint}?q=painting&hasImages=true`);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data.objectIDs || [];
      } catch (error) {
          console.error("Error al buscar pinturas:", error);
          paintingsContainer.innerHTML = `<p class="error-message">Error al cargar las pinturas. Por favor, intenta de nuevo más tarde.</p>`;
          return [];
      }
  }

  // Función para obtener detalles de una pintura por Object ID (igual que antes)
  async function getPaintingDetails(objectID) {
      // ... (misma función getPaintingDetails de antes) ...
      try {
          const response = await fetch(`${objectsEndpoint}/${objectID}`);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return await response.json();
      } catch (error) {
          console.error(`Error al obtener detalles de la pintura ${objectID}:`, error);
          return null;
      }
  }

  // Función para mostrar una pintura en el carrusel según su índice
  async function displayPainting(index) {
      if (index < 0 || index >= paintingObjectIDs.length) {
          return; // Índice fuera de rango, no hacer nada
      }

      const objectID = paintingObjectIDs[index];
      const paintingDetails = await getPaintingDetails(objectID);

      if (paintingDetails && paintingDetails.primaryImageSmall) {
          paintingsContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir la nueva pintura

          const imgElement = document.createElement('img');
          imgElement.src = paintingDetails.primaryImageSmall;
          imgElement.alt = paintingDetails.title || 'Pintura sin título';

          const titleElement = document.createElement('p');
          titleElement.textContent = paintingDetails.title || 'Sin título';

          paintingsContainer.appendChild(imgElement);
          paintingsContainer.appendChild(titleElement);
      } else {
          paintingsContainer.innerHTML = `<p>Error al cargar la pintura.</p>`;
      }
  }

  // Función principal para inicializar y mostrar el carrusel
  async function initializeCarousel() {
      paintingObjectIDs = await searchPaintings();
      if (paintingObjectIDs.length === 0) {
          paintingsContainer.innerHTML = `<p>No se encontraron pinturas con la búsqueda.</p>`;
          prevButton.disabled = true; // Deshabilitar botones si no hay pinturas
          nextButton.disabled = true;
          return;
      }

      // Inicializar el carrusel mostrando la primera pintura
      currentPaintingIndex = 0;
      displayPainting(currentPaintingIndex);

      // Habilitar botones de navegación al inicializar el carrusel
      prevButton.disabled = false;
      nextButton.disabled = false;

      // Deshabilitar el botón "Anterior" al inicio, ya que estamos en la primera pintura
      prevButton.disabled = true;
  }

  // Event listeners para los botones de navegación
  prevButton.addEventListener('click', () => {
      currentPaintingIndex--;
      if (currentPaintingIndex < 0) {
          currentPaintingIndex = paintingObjectIDs.length - 1; // Volver a la última pintura si es la primera
      }
      displayPainting(currentPaintingIndex);
      updateNavigationButtons(); // Actualizar estado de los botones
  });

  nextButton.addEventListener('click', () => {
      currentPaintingIndex++;
      if (currentPaintingIndex >= paintingObjectIDs.length) {
          currentPaintingIndex = 0; // Volver a la primera pintura si es la última
      }
      displayPainting(currentPaintingIndex);
      updateNavigationButtons(); // Actualizar estado de los botones
  });

  // Función para actualizar el estado de los botones de navegación (habilitar/deshabilitar)
  function updateNavigationButtons() {
      prevButton.disabled = currentPaintingIndex === 0; // Deshabilitar "Anterior" en la primera pintura
      nextButton.disabled = paintingObjectIDs.length <= 1; // Deshabilitar "Siguiente" si solo hay una o ninguna pintura
  }


  initializeCarousel(); // Iniciar la carga y visualización del carrusel
});