const csvUrl = 'https://gist.githubusercontent.com/rselover/9d4c1543a8dc994ca151cff20aa8fe1f/raw/5a99753828073ee1d90d1b2bbf4da2393209e414/phish_geocode.csv';

function loadPhishData() {
  return d3.csv(csvUrl, row => ({
    position: [+row.lon, +row.lat]
  }));
}