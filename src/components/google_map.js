import React, { Component } from 'react';

class GoogleMap extends Component {	

	componentDidMount(){
		//this is how we create an embedded Google map
		//passing html element through refs
		//second argument - options object
        
			new google.maps.Map(this.refs.map, {
				zoom: 12,
				center: {
					lat: this.props.lat,
					lng: this.props.lon
				}
			});
	}
	
	
	render() {
		//prop ref - ref system in React
		//allows to get a direct reference to an html reference
		//that has been rendered to the screen
		//this.refs.map
		return <div ref="map" />
	}
}

export default GoogleMap;