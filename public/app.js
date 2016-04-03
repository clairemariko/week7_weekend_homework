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
            var planets = JSON.parse(jsonString);
            main(planets);
            // populateSelect(planets);
        }

    }
    request.send(null);
};
//in the windows.onload is where you execute your functions you have degined below so remeber to call them !

   

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



// putting planet information into my dropdown menu
//planets.forEach is undefined as i know i need to do planets.results but it doesnt work
    var populateSelect = function (planets) {
        // console.log( planets)
        var dropDown = document.querySelector('#planets');
            planets.forEach(function (planet, index){
        var option = document.createElement('option');
        
             option.value = index.toString();
             option.innerText = planet.name;
             dropDown.appendChild(option);
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



