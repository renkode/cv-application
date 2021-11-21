import React, { Component } from "react";
import PersonalForm from "./PersonalForm";
import WorkForms from "./WorkForms";
import EducationForms from "./EducationForms";
import '../App.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

class CVForms extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <PersonalForm
          personalInfo={this.props.personalInfo}
          setPersonalInfo={this.props.setPersonalInfo}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <WorkForms
            workForms={this.props.workForms}
            addWorkForm={this.props.addWorkForm}
            deleteWorkForm={this.props.deleteWorkForm}
            setWorkDate={this.props.setWorkDate}
            setWorkInfo={this.props.setWorkInfo} />
          <EducationForms
            eduForms={this.props.eduForms}
            addEducationForm={this.props.addEducationForm}
            deleteEducationForm={this.props.deleteEducationForm}
            setEducationDate={this.props.setEducationDate}
            setEducationInfo={this.props.setEducationInfo} />
        </LocalizationProvider>
      </div>
    )
  }
}

export default CVForms;
