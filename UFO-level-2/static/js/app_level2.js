// Check to see if app.js is running
console.log("app_level2.js running");

// from data.js
var ufoData = data;

// Create a table body object
var tbody = d3.select("tbody");

// Loop through the UFO data and build a table of it
ufoData.forEach(sighting => {
    var row = tbody.append("tr");
    // Loop through each [key, value] pair in the data entry
    Object.entries(sighting).forEach(([key, value]) => {
        // Append a cell to the row for each value in the [key, value] pairings
        var cell = row.append("td");
        cell.text(value);
    });
});

////////////////////////////////////////////////////////////////////////////////
// Render data fitered on user input ///////////////////////////////////////////
var form = d3.select("form");
var button = d3.select("button");

// Detect user changes to the filters
form.on("change", runFilter);
button.on("submit", runFilter);

// Use an event handler to filter data when called
function runFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the filter input elements and get the raw HTML nodes
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");
    var durationElement = d3.select("#duration");

    // Get the value property for each of the input elements and store them in the filtersUsed object
    var filtersUsed = {};
    
    // Date
    var dateValue = dateElement.property("value");
    if (dateValue !== ''){
        filtersUsed.datetime = dateValue;
    };
    // City
    var cityValue = cityElement.property("value");
    if (cityValue !== ''){
        filtersUsed.city = cityValue;
    };
    // State
    var stateValue = stateElement.property("value");
    if (stateValue !== ''){
        filtersUsed.state = stateValue;
    };
    // Country
    var countryValue = countryElement.property("value");
    if (countryValue !== ''){
        filtersUsed.country = countryValue;
    };
    // Shape
    var shapeValue = shapeElement.property("value");
    if (shapeValue !== ''){
        filtersUsed.shape =shapeValue;
    };
    // Duration
    var durationValue = durationElement.property("value");
    if (durationValue !== ''){
        filtersUsed.durationMinutes = durationValue;
    };

    // Filter ufoData using the filtersUsed object
    var filteredData = ufoData
    Object.entries(filtersUsed).forEach(([key, value]) => {
        filteredData = filteredData.filter(o => o[key] === value);
    });

    // Call a function to build a new table with filtered data
    buildTable(filteredData);
};

// Function to build a new table
function buildTable(data) {
    // Clear the html for the current table to be replaced with filtered data
    tbody = d3.select("tbody");
    tbody.html("");

    // Display the filtered sightings in the cleared table
    data.forEach(sighting => {
        var row = tbody.append("tr");
        // Loop through each [key, value] pair in the data
        Object.entries(sighting).forEach(([key, value]) => {
            // Append a cell to the row for each value in the [key, value] pairings
            var cell = row.append("td");
            cell.text(value);
        });
    });
};