window.onload = function(){
  console.log("chart app running");

//pie charts
var data = new ChartData();
var containers = new ChartContainers();
var types = new ChartTypes();

var title = "Different Planets";
new Chart(title, types.pie, containers.pie, data.pie);

}