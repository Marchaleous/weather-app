class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.hiLo = document.getElementById('w-hi-lo');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(data) {
    this.location.textContent = data.name;
    this.desc.textContent = data.weather[0].main;
    this.string.innerHTML = Math.round(data.main.temp) + '&deg;F';
    this.hiLo.innerHTML = `Hi: ${Math.round(
      data.main.temp_max
    )}&deg;F | Lo: ${Math.round(data.main.temp_min)}&deg;F`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${data.main.humidity}%`;
    this.feelsLike.innerHTML = `Feels Like: ${Math.round(
      data.main.feels_like
    )}&deg;F`;
    this.wind.innerHTML = `Wind: ${mphConversion(
      data.wind.speed
    )}<small>mph</small> ${degreesToCardinal(data.wind.deg)}`;
  }
}
function mphConversion(metersPerSecond) {
  const mph = metersPerSecond * 2.237;
  return Math.round(mph);
}
function degreesToCardinal(degrees) {
  // 22.5 because 360 / array length = 22.5
  const val = Math.round(degrees / 22.5);
  const compassArray = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  return compassArray[val];
}
