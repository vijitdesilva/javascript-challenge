// from data.js
let tableData = data;

// Assign variables
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputField1 = d3.select("#datetime");
let inputField2 = d3.select("#city");
let inputField3 = d3.select("#state");
let inputField4 = d3.select("#country");
let inputField5 = d3.select("#shape");
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
	let  inputState = inputField3.property("value").trim();
	let  inputCountry = inputField4.property("value").trim();
	let  inputShape = inputField5.property("value").trim();
// Filter by field matching input value
	let  filterDate = data.filter(data => data.datetime === inputDate);
	console.log(filterDate)
	let  filterCity = data.filter(data => data.city === inputCity);
	console.log(filterCity)
	let  filterState = data.filter(data => data.state === inputState);
	console.log(filterState)
	let  filterCountry = data.filter(data => data.country === inputCountry);
	console.log(filterCountry)
	let  filterShape = data.filter(data => data.shape === inputShape);
	console.log(filterShape)
	// let  filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState && data.country === inputCountry && data.shape === inputShape);
	// console.log(filterData)
	let  filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity  && data.country === inputCountry && data.state === inputState);
	console.log(filterData)
	

	// Add filtered sighting to table
	tbody.html("");

	let response = {
		// filterData, filterCity, filterDate, filterCountry, filterState 
		filterData, filterCity, filterDate, filterState, filterCountry, filterShape
	}

	if (response.filterData.length !== 0) {
		populate(filterData);
	}
		//else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0 || response.filterCountry.length !== 0 ))){
			//populate(filterCity) || populate(filterDate) || populate(filterCountry);
		else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0 || response.filterState.length !== 0 || response.filterCountry.length !== 0 || response.filterShape.length !== 0))){
			populate(filterCity) || populate(filterDate) || populate(filterState) || populate(filterCountry) || populate(filterShape);
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