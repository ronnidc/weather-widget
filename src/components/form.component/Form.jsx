import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.props.getWeather}>
          <div className="form-group">
            <input className="form-control" type="text" name="city" placeholder="City..." />
          </div>
          <button type="submit" className="btn btn-default">Update</button>
        </form>
        
      </React.Fragment>
    );
  }

}

export default Form;