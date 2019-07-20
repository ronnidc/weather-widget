import React, { Component } from "react";
import './WeatherWidget.scss';
import Title from '../../components/title.component/Title';
import Weather from '../../components/weather.component/Weather';
import Form from '../../components/form.component/Form';

class WeatherWidget extends Component {

  render() {

    return (
	<div className="widget" style={{margin: 10 + 'px', width: 300 + 'px'}}>
		<div className="panel panel-info">
		  <Title />
		  <Weather />
      <Form />
		</div>
	</div>
    );
  }
}

export default WeatherWidget;
