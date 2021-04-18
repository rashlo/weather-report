import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";

const Api_Key = process.env.REACT_APP_WEATHER_API;

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    code: undefined,
    icon: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
    const response = await apiCall.json();
    this.setState({
      temperature: response.main.temp, 
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      error: ""
    })
  }

	//iconURL = `https://openweathermap.org/img/w/${this.state.icon}.png`;

  render() {
    return (
       <div>
        <div className = "wrapper">
          <div className = "main">
            <div className = "container">
              <div className = "row"> 
                <div className = "col-xs-5 title-container">
                  <Titles />
                </div>  
                <div className = "col-xs-6 form-container">
                  <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
										icon={this.state.icon}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
