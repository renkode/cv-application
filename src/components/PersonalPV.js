import React, { Component } from "react";
import '../App.css';

class PersonalPV extends Component {
  render() {
    return (
      <div className="pv-personal">
        <p>{this.props.personalInfo.name}</p>
        <p>{this.props.personalInfo.title}</p>
        <p>{this.props.personalInfo.email}</p>
        <p>{this.props.personalInfo.phone}</p>
        <p>{this.props.personalInfo.location}</p>
        <p>{this.props.personalInfo.description}</p>
      </div>
    )
  }
}

export default PersonalPV;