import React, { Component } from "react";
import './WeatherWidget.scss';
import Title from '../../components/title.component/Title';
import Weather from '../../components/weather.component/Weather';
import Form from '../../components/form.component/Form';

const API_KEY = "166d00e26d3ff2c6149e89feccc5c59a";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?";

class WeatherWidget extends Component {
  state = {
    city: 'Copenhagen', 
    temperature: undefined,
    humidity: undefined,
    windspeed: undefined,
    winddeg: undefined, 
    description: undefined,
    error: undefined
  }
  componentDidMount = async () => {
    const api_call = await fetch(`${API_URL}q=Copenhagen,dk&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);

    this.setState({
      city: 'Copenhagen',
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windspeed: Math.round(data.wind.speed),
      winddeg: data.wind.deg,
      description: data.weather[0].description,
      error: ""
    })
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`${API_URL}q=${city},dk&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    if (data.message) {
      this.setState({
        error: data.message.charAt(0).toUpperCase() + data.message.substr(1)
      })
      return false;
    }
    if (city) {
      console.log(data);
      this.setState({
        city: data.name,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windspeed: Math.round(data.wind.speed),
        winddeg: Math.round(data.wind.deg),
        description: data.weather[0].description,
        error: ""
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>The Danish Weather</h1>

        <div className="widget" style={{margin: 10 + 'px', width: 300 + 'px'}}>
          <div className="panel panel-info">
            <Title city={this.state.city} />
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              humidity={this.state.humidity}
              windspeed={this.state.windspeed}
              winddeg={this.state.winddeg}
              description={this.state.description}
              error={this.state.error}
            />
            <Form getWeather={this.getWeather} />
          </div>
        </div>
  </React.Fragment>
    );
  }
}

export default WeatherWidget;
