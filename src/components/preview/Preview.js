import React, { Component } from "react";
import PersonalPV from "./PersonalPV";
import WorkPV from "./WorkPV";
import EducationPV from "./EducationPV";
import '../../App.css';

class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <PersonalPV personalInfo={this.props.personalInfo}/>
        <WorkPV workForms={this.props.workForms}/>
        <EducationPV eduForms={this.props.eduForms}/>
      </div>
    )
  }
}

export default Preview;