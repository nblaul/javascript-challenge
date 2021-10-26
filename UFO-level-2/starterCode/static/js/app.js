// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing enter
button.on("click", function() {
    tbody.html("");
    // create input element and get input value
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => 
        sighting.datetime === inputValue ||
        sighting.city === inputValue ||
        sighting.state === inputValue ||
        sighting.country === inputValue ||
        sighting.shape === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(results) {
        console.log(results);
        var row = tbody.append("tr");

        Object.entries(results).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });


    // tableData.forEach(function(sighting) {
    //     console.log(sighting);
    //     var row = tbody.append("tr");

    //     Object.entries(sighting).forEach(function([key, value]) {
    //         console.log(key, value);
    //         var cell = row.append("td");
    //         cell.text(value);
    //     })
    // });

function changeName(name) {
    document.getElementById("peep").innerHTML = name;
}

});