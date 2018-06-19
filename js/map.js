document.addEventListener("DOMContentLoaded", function() {
    function initMap() {
        var location = {
            lat: 52.205039,
            lng: 20.893656
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: location
        });
    }

});