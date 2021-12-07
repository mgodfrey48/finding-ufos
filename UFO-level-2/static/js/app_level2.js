// Check to see if app.js is running
console.log("app_level2.js running")

// from data.js
var tableData = data;

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
    });
});

// Render data fitered on user input
var form = d3.select("form");

form.on("change", runEnter);

function runEnter() {
    console.log('runEnter running');
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input elements and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var shapeElement = d3.select("#shape");
    var durationElement = d3.select("#duration");

    // Get the value property of the input element
    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var shapeValue = shapeElement.property("value");
    var durationValue = durationElement.property("value");

    // Print the value to the console
    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(shapeValue);
    console.log(durationValue);


    // Store all of the sightings from the date that matches the input data
    // var dateMatch = tableData.filter(sighting => sighting.datetime === inputValue)
    
    // // Clear the html for the table to be replaced with filtered data
    // tbody.html("");

    // // Display the filtered sightings in the cleared table
    // dateMatch.forEach(sighting => {
    //     var row = tbody.append("tr");
    //     // Loop through each [key, value] pair in the data entry
    //     Object.entries(sighting).forEach(([key, value]) => {
    //         // Append a cell to the row for each value in the [key, value] pairings
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
};