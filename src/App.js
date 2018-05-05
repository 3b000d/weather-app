import React from "react";
import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import "./bulma.min.css";
import "./App.css"

class App extends React.Component {

    state = {
        temperature : undefined,
        humidity : undefined,
        city : undefined,
        country : undefined,
        description : undefined,
        error:undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;
        var country = e.target.elements.country.value;

        const api_call =await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&forecast?id=524901&APPID=5b29699cde634966d45662a601d47cdc");
        const data = await api_call.json();

        if (city && country){

            console.log(data);
            this.setState({
                temperature : Math.round(data.main.temp - 273.15),
                humidity : data.main.humidity,
                city : data.name,
                country : data.sys.country,
                description : data.weather[0].description,
                error : ""
            });
        } else {
            this.setState({
                temperature : undefined,
                humidity : undefined,
                city : undefined,
                country : undefined,
                description : undefined,
                error : "Please enter ur country and city"
            });
        }
    }

    render() {
        return(
            <div className="margin">
                <div className="flex shadow">
                    <Title />
                    <div className="notification form-me">
                        <Form getWeather = {this.getWeather} />
                        <Weather
                            temperature = {this.state.temperature}
                            humidity = {this.state.humidity}
                            city = {this.state.city}
                            country = {this.state.country}
                            description = {this.state.description}
                            error = {this.state.error}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default App;