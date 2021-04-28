// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");


data.forEach((UFOSighting) => {
    let row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) {
    let cell = row.append("td");
    cell.text(value);
});
});


