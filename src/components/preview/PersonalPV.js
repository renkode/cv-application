import React, { Component } from "react";
import '../../App.css';

class PersonalPV extends Component {
  render() {
    return (
      <div className="pv-personal">
        <div className="intro-wrapper">
          <div className="intro">
            <div className="personal-name">{this.props.personalInfo.name}</div>
            <div className="personal-title">{this.props.personalInfo.title}</div>
            <div className="personal-desc">{this.props.personalInfo.description}</div>
          </div>
          <div className="contact">
            <div>{this.props.personalInfo.email}</div>
            <div>{this.props.personalInfo.phone}</div>
            <div>{this.props.personalInfo.location}</div>
            <div>{this.props.personalInfo.website}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalPV;