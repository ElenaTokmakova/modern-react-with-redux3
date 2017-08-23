import { FETCH_WEATHER } from '../actions/index';

//reducer is just a function
//the first argument is state for this particular piece of state reducer is responsible for
//the second argument is the action
//do not forget to add to combineReducers()

export default function(state = [], action) {
	//this is not a promise anymore (!!!)
	//Redux promise is a middleware
	//Redux promise ceases the incoming action
	//looks at the payload property
	//if the payload is a promise, Redux stops the action entirely
	//Redux middleware specifically checks if the payload is a promise
	//once the request finishes, it dispatches a new action of the same type
	//but with a payload of the resolved request
	//it unwraps the promise action for us (!!!)
	//What would we do with a promise inside of a reducer?
	//Here is a switch statement but wait until the action gets resolved?
	//Middleware stops the action until the promise is resolved
	//if the action is not a promise, middleware lets it go through to reducers

	//console.log('Actions received (reducer)', action);

 	switch (action.type) {
 		case FETCH_WEATHER: 
 			//we are going to have multiple cities inside of here
 			//we are not actually collecting cities
 			//we want to have a concept of one active city at a time
 			//take our current list of cities and add a new city
 			//we want to add to the existing state, not replace it entirely
 			//we don't ever manipulate state directly
 			//we need to return a new array entirely 
 			//that includes old weather data and new weather data
 			//always make sure that you are returning a new instance of state

 			return [ action.payload.data, ...state ]; // [city, city, city]
 	}


	return state;
}