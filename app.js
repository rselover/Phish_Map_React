const e = React.createElement;

function App() {
  return e('div', null,
    e('h1', null, 'PHISH SONG COUNT BY CITY'),
    e('p', null, 'Find Yourself a City to Live In – Songs from every Phish show aggregated by City'),
    e('div', { id: 'map', style: { width: '100%', height: '600px' } })
  );
}

ReactDOM.render(
  e(App),
  document.getElementById('root')
);

// After React renders, initialize Mapbox (or import from map.js)
setTimeout(() => {
  mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98, 39],
    zoom: 3
  });
  // Add D3/Deck.gl logic here or import from map.js
}, 100);
