import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart"; 
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
	//this function is for rendering a single city, a single row
	renderWeather(cityData) { 
		const name = cityData.city.name;
		//list of forecasts, one for every 3 hours
		//will return an array of temperatures
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		//find the coords object
		//grab the lon and lat properties off of it
		//and assign them to new variables lon and lat
		const {lon, lat} = cityData.city.coord;
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="K"/></td>
				<td><Chart data={pressures} color="green" units="hPa"/></td>
				<td><Chart data={humidities} color="black" units="%"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>			
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPA)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{/*this is an array of objects*/}
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	//weather in the arguments is equal to 
	//const weather = state.weather
	//it used to be just state
	//we are using state.weather because we assigned the WeatherReducer
	//to the weather key in combineReducers
	//return equals to { weather: state.weather } or { weather: weather }
	return { weather }; //
}

export default connect(mapStateToProps)(WeatherList);