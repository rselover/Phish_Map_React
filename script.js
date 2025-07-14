mapboxgl.accessToken = 'pk.eyJ1IjoicnNlbG92ZXIiLCJhIjoiY21hbGJxMGxjMDZ6MDJtb3JqMWx5ZHh0YSJ9.50NQFxaZLsWruJ8dFIqfXw';

const csvUrl = 'https://gist.githubusercontent.com/rselover/9d4c1543a8dc994ca151cff20aa8fe1f/raw/5a99753828073ee1d90d1b2bbf4da2393209e414/phish_geocode.csv';

function initMap() {
  d3.csv(csvUrl, row => ({
    position: [+row.lon, +row.lat]
  })).then(data => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-95, 40],
      zoom: 3,
      pitch: 20,
      bearing: 0
    });

    map.on('style.load', () => {
      map.setProjection('mercator');
    });

    map.on('load', () => {
      const hexLayer = new deck.HexagonLayer({
        id: 'phish-hex-layer',
        data,
        radius: 20000,
        elevationScale: 250,
        extruded: true,
        pickable: true,
        getPosition: d => d.position,
        colorRange: [
          [255, 255, 204],
          [255, 204, 204],
          [255, 153, 153],
          [255, 102, 102],
          [255, 51, 51],
          [255, 0, 0]
        ],
        opacity: 0.9
      });

      const deckOverlay = new deck.MapboxOverlay({ layers: [hexLayer] });
      map.addControl(deckOverlay);
    });
  });
}

// Wait for React to render #map before initializing Mapbox
window.addEventListener('DOMContentLoaded', () => {
  function waitForMapDiv() {
    if (document.getElementById('map')) {
      initMap();
    } else {
      setTimeout(waitForMapDiv, 50);
    }
     waitForMapDiv();
}); 
