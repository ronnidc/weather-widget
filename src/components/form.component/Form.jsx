import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
        <input type="text" className="form-control" id="city" placeholder="City" />
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    );
  }

}

export default Form;