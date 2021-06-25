// from data.js
var tableData = data;

// YOUR CODE HERE!

// Same code to populate table data
var tbody = d3.select("tbody");
var option_list = [];

tableData.forEach(ufodata => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    option_list.push("");
    option_list.push(ufodata.shape);
  });
});

