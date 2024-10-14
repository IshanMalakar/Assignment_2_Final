var vg_2 = "line_chart.vg.json";  // assuming you have the chart JSON here
vegaEmbed("#line_chart", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);
