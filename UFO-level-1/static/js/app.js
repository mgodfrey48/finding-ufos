// Check to see if app.js is running
console.log("app.js running")

// from data.js
var tableData = data;

// Store the dates in an array
var dates = tableData.map(sighting => {
    return sighting.datetime;
});

// Add the dates to the table in index.html using d3
// Create a table body object
var tbody = d3.select("tbody");

var row = tbody.append("tr");

row.append("td").text(dates[0])

