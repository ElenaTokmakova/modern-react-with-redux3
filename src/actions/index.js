import axios from 'axios';

const API_KEY = "ab395f4ef9ca67740fc43a818901534f";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//the AJAX request
//the app state includes weather data
//we change app state through reducers and actions
//to load our weather data, we need to dispatch an action
//call an action creator that will be responsible for making an API request
//function returns an action - an object that must have a type

//to keep our action types consistent between out action creators and reducers
//we are going to create a reducer that handles this type here
//this is why we have a variable and not a string
//if somebody changes the string, the reducer will not recognize the type
//we create a single canonical variable to hold our actions type
//the string can be changed later, but the variable will remain
//we are goint to import this variable inot our reducer
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ca`;	
	const request = axios.get(url);

	//axios returns a promise here
	//the promise is a data structure 
	//that does not contain our data here
	//we are returning the promise (!!!) as the payload

	//console.log('Request (action)', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}