// Check to see if app.js is running
console.log("app.js running")

// from data.js
var tableData = data;

// Store the dates in an array
var dates = tableData.map(sighting => {
    return sighting.datetime;
});

// Create a table body object
var tbody = d3.select("tbody");

// Loop through the UFO data and use d3 
tableData.forEach(sighting => {
    var row = tbody.append("tr");
    // Loop through each [key, value] pair in the data entry
    Object.entries(sighting).forEach(([key, value]) => {
        // Append a cell to the row for each value in the [key, value] pairings
        var cell = row.append("td");
        cell.text(value);
    })
})

