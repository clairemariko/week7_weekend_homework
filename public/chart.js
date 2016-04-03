//make a pie chart display different climates


window.onload = function(){

  var data = new ChartData();
  var containers = new ChartContainers();
  var types = new ChartTypes();

    var title = "Different Planets";
    new Chart(title, types.pie, containers.pie, data.pie);
    // new Chart(title, types.line, containers.line, data.series, data.months);
    //you have to add a new chart that 
  

}