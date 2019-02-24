let chart = new frappe.Chart( "#chart", { // or DOM element
    data: {
      labels: ["Game/Toy Design", "Interaction Design", "Design Research", "Creative Technology",
      "Speculative Design", "Engineering", "Project Management", "Maps and GeoViz"],

      datasets: [
        {
          name: "Number of projects done", chartType: 'bar',
          values: [6, 13, 8, 9, 2, 7, 3, 7]
        }
      ],

    },
  
 barOptions: {
    spaceRatio: 0.1 // default: 1
    
},
  

    title: "Project breakup based on skills",
    type: 'bar', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ['purple', '#ffa3ef', 'light-blue'],
    valuesOverPoints: 1,
    tooltipOptions: {
      formatTooltipX: d => (d + '<br>').toUpperCase(),
      formatTooltipY: d => d + ' projects',
    }
  });