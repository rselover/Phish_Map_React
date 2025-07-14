const e = React.createElement;

function App() {
  return e('div', null,
    e('h1', null, 'PHISH SONG COUNT BY CITY'),
    e('p', null, 'Find Yourself a City to Live In – Songs from every Phish show aggregated by City'),
    e('div', { id: 'map', style: { width: '100%', height: '600px' } })
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));

// Initialize map after React renders
setTimeout(() => {
  initMap();
}, 100);
