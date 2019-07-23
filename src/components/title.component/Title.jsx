import React, { Component } from "react";

class Title extends Component {
	render() {
		return (
			<div className="panel-heading">
        Weather in <strong>{this.props.city}</strong>
      </div>
		);
	}

}

export default Title;