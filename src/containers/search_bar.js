import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'; 

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ""
		};

		//when you are passing the callback around
		//and it is referencing this
		//we need to bind it - bind the context
		//if you get an error about not knowing what the function is
		//start thinking about the context
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}

	onFormSubmit(event){
		event.preventDefault();

		//we need to go and fetch weather data
		//we need to fire it up 
		//so whenever user types something in
		//we make an API request

		this.props.fetchWeather(this.state.term);
		//clear the search input field for user convenience
		this.setState({ term: "" });
	}

	render() {
		return (
			<form onSubmit = {this.onFormSubmit} className="input-group">
				<input 
				placeholder="Get a five-day forecast in your favourite cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

//null is here because mapDispatchToProps needs to be the second argument
//we get access to the function this.props.fetchWeather inside the component
//this container does not care about the state
export default connect(null, mapDispatchToProps)(SearchBar);