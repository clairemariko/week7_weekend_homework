window.onload = function () {
    //WHERE IS IT GETTING SENT TO - STAR WARS API
    var url = 'http://swapi.co/api/planets/'
    //MAKE A REQUEST
    var request = new XMLHttpRequest();
    //WHERE IS THIS REQUEST GOING
    request.open("GET", url);
    //WHAT TO DO WHEN IT COMPLETES
    request.onload = function () {
        if (request.status === 200) {
            var jsonString = request.responseText;
            var planetss = JSON.parse(jsonString);
            main(planets);
        }
    }
    request.send(null);
};

   
// //this is setting it up to where it is going to start! include map and drop down!
//a drop down of all planets! this is where you i might add a pie chart if time
    var main = function (planets){
        populateSelect(planets);
        var saved = localStorage.getItem("selectedPlanet");
        var selected = planets[saved];
        if(saved){
            selected = JSON.parse(cached);
            document.querySelector('#planets').value = saved;
            updateDisplay(planets[saved]);
        }
        document.querySelector('#info').style.display = 'block';
    }


// var populateSelect = function (countries) {
//     var parent = document.querySelector('#countries');
//     countries.forEach(function (country, index) {
//         // country.index = index;
//         var option = document.createElement("option");
//         option.value = index.toString();
//         option.innerText = country.name;
//         parent.appendChild(option);
//     });
//     parent.style.display = 'block';
//     parent.addEventListener('change', function () {
//         var index = this.value;
//         var country = countries[index];
//         updateDisplay(country);
//         localStorage.setItem("selectedCountry", index);
//     });
//  }

// var updateDisplay = function (country) {
//     var tags = document.querySelectorAll('#info p');
//     tags[0].innerText = country.name;
//     tags[1].innerText = country.population;
//     tags[2].innerText = country.capital;
//  }