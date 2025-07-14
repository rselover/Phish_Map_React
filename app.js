const e = React.createElement;

function App() {
  return e('div', null,
    e('h1', null, 'PHISH SONG COUNT BY CITY'),
    e('p', null, 'Find Yourself a City to Live In – Songs from every Phish show aggregated by City'),
    e('div', { id: 'map', style: { width: '100%', height: '600px' } })
  );
}

// Use React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));

// Mapbox initialization (after React renders)
setTimeout(() => {
  mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98, 39],
    zoom: 3
  });
}, 100);
