// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("#button");
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing enter
button.on("click", filterData);
form.on("submit", filterData);

function filterData() {

    // create input element and get input value
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    return tableData.datetime == inputValue;

        }

    var ufoSighting = tableData.filter(filterData);

    console.log(ufoSighting);

        // tableData.forEach(function(ufo) {
        //     console.log(ufo);
        //     var row = tbody.append("tr");
    
        //     Object.entries(ufo).forEach(function([key, value]) {
        //         console.log(key, value);
        //         var cell = row.append("td");
        //         cell.text(value);


