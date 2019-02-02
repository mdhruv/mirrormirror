const url = 'https://api.openweathermap.org/data/2.5/weather?zip=95050,us&units=imperial&APPID=e944bff942a64a3b2526bf88ad1f3676'

var getWeatherData = function() {
	$.get(url, function(data, status){
		if (status == 'success') {
			updateWeather(data)
		}
	}
)};

function updateWeather(data) {
  if (data == null) {
    return;
  }
  html = '<canvas id="weather-icon" width="128" height="128"></canvas><h2> '+Math.round(data.main.temp)+'&deg;F</h2>';       
  html += '<div id="region">Santa Clara, California</div>';
  for (var i=0; i<data.weather.length;i++) {
    html += '<div>'+data.weather[i].description.replace(/\b\w/g, l => l.toUpperCase())+'</div>';
  }
  html += '<div>'+windDirection(data.wind.deg)+' '+Math.round(data.wind.speed)+' mph</div>';
  $("#weather").html(html);

  var animation = 'clear-day';
  if (data.weather.length > 0) {
	  animation = getWeatherIcon(data.weather[0].icon);
  }
  var skycons = new Skycons({"color": "white"});
  skycons.remove('weather-icon')
  skycons.add("weather-icon", animation);
  skycons.play();
};

function getWeatherIcon(iconString) {
  switch(iconString) {
	case '01d':
		return 'clear-day';
	case '02d':
		return 'partly-cloudy-day';
	case '03d':
		return 'cloudy';
	case '04d':
		return 'cloudy';
	case '09d':
		return 'rain';
	case '10d':
		return 'rain';
	case '11d':
		return 'rain';
	case '13d':
		return 'snow';
	case '50d':
		return 'fog';
	case '01n':
		return 'clear-night';
	case '02n':
		return 'partly-cloudy-night';
	case '03n':
		return 'cloudy';
	case '04n':
		return 'cloudy';
	case '09n':
		return 'rain';
	case '10n':
		return 'rain';
	case '11n':
		return 'rain';
	case '13n':
		return 'snow';
	case '50n':
		return 'fog';
    }
	return 'wind';
}

function windDirection(degrees) {
	var x = Math.floor(parseInt(degrees)/45)
	switch(x) {
	case 0:
	  return 'S'
	case 1:
	  return 'SW'
	case 2:
	  return 'W'
	case 3:
	  return 'NW'
	case 4:
	  return 'N'
	case 5:
	  return 'NE'
	case 6:
	  return 'E'
	case 7:
	  return 'SE'
	}
	return 'X'
}

$(document).ready(function() {
	getWeatherData();
	setInterval(getWeatherData, 300000);
});
