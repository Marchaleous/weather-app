// API INFO
// API KEY: 90d2a7f29a179c46eaebe820dd8678dd
// https://api.openweathermap.org/data/2.5/weather?q={CITY NAME HERE},{STATE CODE HERE}&appid={API KEY HERE}&units={default(K), metric(C), OR imperial(F)}

class Weather {
  constructor(city, state) {
    this.apiKey = '90d2a7f29a179c46eaebe820dd8678dd';
    this.city = city;
    this.state = state;
    // this.units = units;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=imperial`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
