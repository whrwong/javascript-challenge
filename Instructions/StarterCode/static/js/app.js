// from data.js
var tableData = data;

// YOUR CODE HERE!

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
let table = document.querySelector("table");
  generateTable(table, tableData);

  // Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("datetime");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");
  
// We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
}
  
// Filter the data, using input date
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

button.on('click', runEnter);

inputField.on('submit', runEnter);

function runEnter() {

    d3.event.preventDefault(); // preventDefault prevents the webpage from reloading after filtering

    // Grab the input element
    var inputElement = d3.select("#datetime");
    console.log(inputElement);
    // Retrieve value of the input
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    console.log(typeof (inputValue));

    console.log(data);

    //testing,  IT WORKS BABY!!!!!!!
    function whatever(datum) {
        return datum.datetime === inputValue
    };

    var filteredData = data.filter(whatever);
    console.log(filteredData)
}
