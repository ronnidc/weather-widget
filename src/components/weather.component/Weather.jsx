import React, { Component } from "react";

class Weather extends Component {
	render() {
		return (
			<ul className="list-group">
        <li className="list-group-item">
          Temperature: <strong>{this.props.temperature}&deg;C</strong>
        </li>
        <li className="list-group-item">
          Humidity: <strong>{this.props.humidity}</strong>
        </li>
        <li className="list-group-item">
          Wind: <strong>{this.props.windspeed} m/s</strong>
        </li>
        {this.props.error && <li className="list-group-item error-text"><em>{ this.props.error }</em></li> }
      </ul>
		);
	}

}

export default Weather;