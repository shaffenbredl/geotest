$(function() {
  console.log("Hi");

  var weatherData = function(lat, lng) {
    apiKey = "4a5c268c050162e3";
    url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/g/" + lat + "/" + lng + "/";
    $.ajax({
      url: url,
      success: function(data) {
        console.log("Data", data);
      },
      error: function() {
        console.log("Error");
      }
    });
  };

  var success = function(position) {
    console.log("Success", position.coords.latitude);
    weatherData(position.coords.latitude, position.coords.longitude);
  };

  navigator.geolocation.getCurrentPosition(success);

})