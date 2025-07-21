function renderShowsByYearPlot() {
  loadGraphData().then(data => {
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

    // Make the plot fill the card width with similar buffer as the map
    // Get the parent card content width (the CollapsibleCard's CardContent)
    let plotWidth = 700;
    const parent = plotDiv.parentElement;
    if (parent) {
      // Subtract padding/margin for a buffer (32px is CardContent default padding)
      plotWidth = Math.max(300, parent.clientWidth - 32);
    }

    if (yearCounts.length === 0) {
      plotDiv.textContent = "No data to display. Check your CSV field names.";
      return;
    }

    const plot = Plot.plot({
      marginLeft: 40,
      marginRight: 20,
      marginBottom: 40,
      width: plotWidth,
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