//the starwars api also includes a connection to the people api. looking into how to getting this information//

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

//putting planet information into my dropdown menu
    var populateSelect = function (planets){
        var dropDown = document.querySelector('#planets');
            planets.forEach(function (planet, index){
            // planet.index = index;
            var option = document.createElement("option");
            var option.value = index.toString();
            console.log('option')
            option.innerText = planet.name;
            dropDown.appendChild(options);
        });
            dropDown.style.display = 'block';
            dropDown.addEventListener('change', function(){
                var index = this.value;
                var planet = planets[index];
                updateDisplay(planet);
                localStorage.setItem("selectedPlanet", index);
            });
    }

    var updateDisplay = function (planet){
        var tags = document.querySelectorAll('#info p');
        tags[0].innerText = planet.name;
        tags[1]. innerText = planet.terrain;
        tags[2]. innerText = planet.climate;
    }



