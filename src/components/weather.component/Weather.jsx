import React, { Component } from "react";

class Weather extends Component {
	render() {
		return (
			<ul className="list-group">
        <li className="list-group-item">Temperature: <strong>5°C</strong></li>
        <li className="list-group-item">Humidity: <strong>65</strong></li>
        <li className="list-group-item">Wind: <strong>11 m/s Øst</strong></li>
		  </ul>
		);
	}

}

export default Weather;