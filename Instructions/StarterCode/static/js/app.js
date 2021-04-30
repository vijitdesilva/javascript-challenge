// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputField1 = d3.select("#datetime");
let inputField2 = d3.select("#city");
let inputField3 = d3.select("#country");
let resetbtn = d3.select("#reset-btn");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

let  populate = (dataInput) => {

	dataInput.forEach(ufo_sightings => {
		let  row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sightings[column])
		)
	});
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
	d3.event.preventDefault();
	let  inputDate = inputField1.property("value").trim();
	let  inputCity = inputField2.property("value").toLowerCase().trim();
// Filter by field matching input value
	let  filterDate = data.filter(data => data.datetime === inputDate);
	console.log(filterDate)
	let  filterCity = data.filter(data => data.city === inputCity);
	console.log(filterCity)
	let  filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
	console.log(filterData)
	let  filterCountry= data.filter(data => data.country === inputCountry);
	console.log(filterCountry)
	// let  filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && === inputCountry);
	// console.log(filterData)
	

	// Add filtered sighting to table
	tbody.html("");

	let response = {
		filterData, filterCity, filterDate, filterCountry
	}

	if (response.filterData.length !== 0) {
		populate(filterData);
	}
		else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
			populate(filterCity) || populate(filterDate);
	
		}
		else {
			tbody.append("tr").append("td").text("No results found!"); 
		}
})

resetbtn.on("click", () => {
	tbody.html("");
	populate(data)
	console.log("Table reset")
})