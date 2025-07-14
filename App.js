import './App.css';

const e = React.createElement;

function App() {
  return e('div', { className: 'App' },
    e('h1', null, 'PHISH SONG COUNT BY CITY'),
    e('p', null, 'Find Yourself a City to Live In – Songs from every Phish show aggregated by City'),
    e('div', { id: 'map', style: { width: '100vw', height: '90vh' } })
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
