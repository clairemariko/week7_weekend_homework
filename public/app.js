window.onload = function () {
    var url = 'http://swapi.co/api/planets/'
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function () {
        if (request.status === 200) {
            var jsonString = request.responseText;
            var countries = JSON.parse(jsonString);
            main(countries);
        }
    }
    request.send(null);
};