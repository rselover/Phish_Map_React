// This file contains utility functions for loading and processing the Phish show location data from the CSV file.

export const csvUrl = 'https://gist.githubusercontent.com/rselover/9d4c1543a8dc994ca151cff20aa8fe1f/raw/5a99753828073ee1d90d1b2bbf4da2393209e414/phish_geocode.csv';

export const loadData = async () => {
  const response = await fetch(csvUrl);
  const data = await response.text();
  const rows = data.split('\n').slice(1); // Skip header row
  return rows.map(row => {
    const [lat, lon] = row.split(',').map(Number);
    return { position: [lon, lat] }; // Return as { position: [lon, lat] }
  });
};
