const graphCsvUrl = 'https://gist.githubusercontent.com/rselover/4557e5bd2a742985c4a7f55acd34fa9a/raw/202f20905e299ffa3963b10f3e8ece3c2fb7eae4/Phish_Groomed_2019-0213.csv';

function loadGraphData() {
  return d3.csv(graphCsvUrl, row => ({
    ...row
  }));
}

function renderShowsByYearPlot() {
  loadGraphData().then(data => {

    // Use the correct field name from your CSV: "Date"
    const years = {};
    data.forEach(d => {
      const dateStr = d.Date;
      if (dateStr) {
        const year = +dateStr.slice(0, 4);
        if (!isNaN(year)) {
          years[year] = (years[year] || 0) + 1;
        }
      }
    });

    const yearCounts = Object.entries(years)
      .map(([year, count]) => ({ year: +year, count }))
      .sort((a, b) => a.year - b.year);

    const plotDiv = document.getElementById('plot');
    plotDiv.innerHTML = '';

    // If no data, show a message
    if (yearCounts.length === 0) {
      plotDiv.textContent = "No data to display. Check your CSV field names.";
      return;
    }

    const plot = Plot.plot({
      marginLeft: 40,
      marginBottom: 40,
      width: 700,
      height: 300,
      style: {
        background: "#222",
        color: "#eee",
        fontFamily: "sans-serif"
      },
      x: {
        label: "Year",
        labelAnchor: "center",
        tickFormat: d => d,
        axis: "bottom",
        color: "#eee"
      },
      y: {
        label: "Shows",
        labelAnchor: "center",
        color: "#eee"
      },
      marks: [
        Plot.barY(yearCounts, { x: "year", y: "count", fill: "#90caf9" }),
        Plot.ruleY([0], { stroke: "#888" })
      ]
    });

    plotDiv.appendChild(plot);
  });
}

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