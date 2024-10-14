  // Embed the choropleth map
  vegaEmbed('#choropleth_map', mapSpec).then(result => {
    // Add click event listener to update bar chart when a region is clicked
    result.view.addEventListener('click', (event, item) => {
      if (item && item.datum && item.datum.properties) {
        const selectedRegion = item.datum.properties.SA4_NAME21.trim();
        console.log("Region clicked: ", selectedRegion);  // Log clicked region
        updateBarChart(selectedRegion);  // Pass to updateBarChart
      }
    });
  }).catch(console.error);


initializeChoroplethMap();
