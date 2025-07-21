const graphCsvUrl = 'https://your-csv-url-for-graph.com/phish_shows_by_year.csv';

function renderShowsByYearPlot() {
  loadGraphhData().then(data => {
    // Extract year from the data (assuming your CSV has a 'date' field in YYYY-MM-DD format)
    const years = {};
    data.forEach(d => {
      if (d.Date) {
        const year = +d.Date.slice(0, 4);
        if (!isNaN(year)) {
          years[year] = (years[year] || 0) + 1;
        }
      }
    });

    // Convert to array for plotting
    const yearCounts = Object.entries(years)
      .map(([year, count]) => ({ year: +year, count }))
      .sort((a, b) => a.year - b.year);

    // Remove any previous plot
    const plotDiv = document.getElementById('plot');
    plotDiv.innerHTML = '';

    // Create the plot
    const plot = Plot.plot({
      marginLeft: 40,
      marginBottom: 40,
      width: 700,
      height: 300,
      x: {
        label: "Year",
        //type: "linear" // Fix: ensure x axis is linear for numeric years
      },
      y: {
        label: "Shows"
      },
      marks: [
        Plot.barY(yearCounts, { x: "year", y: "count", fill: "#90caf9" }),
        Plot.ruleY([0])
      ]
    });

    plotDiv.appendChild(plot);
  });
}

// Wait for the plot div to exist before rendering
window.addEventListener('DOMContentLoaded', () => {
  function waitForPlotDiv() {
    if (document.getElementById('plot')) {
      renderShowsByYearPlot();
    } else {
      setTimeout(waitForPlotDiv, 50);
    }
  }
  waitForPlotDiv();
});