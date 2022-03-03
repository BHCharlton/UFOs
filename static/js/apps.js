//Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
// D3 is a JS library for producing graphics on a webpage
var tbody = d3.select("tbody");

// Take two numbers and add them
 function addition(a, b) {
     return a + b;
}

function subtract(a, b) {
    return a - b;
}

// The tbody.html("") is used to clear data that may already exist, helping to prevent duplicates
function buildTable(data) {
    tbody.html("");

    // This will attach a for loop to loop through each object in the data file
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // let is used (instead of var) when you want to limit the variable to this specific line only
        // tr tags are used for each row in a table
        let row = tbody.append("tr");
    
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        // td tags represent table data
        let cell = row.append("td");
        cell.text(val);
        });
    });
}

// // Add a filter function to elliminate bloat data we won't need
// function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData; 

//     // Check to see if a date was entered and filter the data using that date
//     if (date) {
//         // Apply `filter` to the table data to only keep the
//         // rows where the `datetime` value matches the filter value
//         filteredData = filteredData.filter(row => row.datetime === date);
//     };
//     // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
    
// };

// // Attach an event to listen for the form button
// d3.selectAll("#filter-btn").on("click", handleClick);

// // Build the table when the page loads
buildTable(tableData);