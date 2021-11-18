import React, { Component } from "react";
import './App.css';
import uniqid from "uniqid";
import { Button, TextField } from '@mui/material';

class App extends Component {
  constructor(){
    super();
    this.state = {
      personalInfo: {
        name: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        description: '',
      },
      workExp: [
        {
          id: uniqid(),
          position: '',
          company: '',
          from: '',
          to: '',
          description: '',
        },
      ],
      education: [
        {
          id: uniqid(),
          title: '',
          organization: '',
          from: '',
          to: ''
        }
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  addWorkForm() {
    const newForm = {
      id: uniqid(),
      position: '',
      company: '',
      from: '',
      to: '',
      description: '',
    };
    const forms = [...this.state.workExp, newForm];
    this.setState({
      workExp: forms,
    });
  }

  addEducationForm() {
    const newForm = {
      id: uniqid(),
      title: '',
      organization: '',
      from: '',
      to: ''
    };
    const forms = [...this.state.education, newForm];
    this.setState({
      education: forms,
    });
  }

  render() {
    const workForms = this.state.workExp.map(work => (
      <div id={work.id} className="work-form">
        <TextField label="Position" variant="outlined" margin="dense" size="small"/>
        <TextField label="Company" variant="outlined" margin="dense" size="small"/>
        <TextField label="From" variant="outlined" margin="dense" size="small"/>
        <TextField label="To" variant="outlined" margin="dense" size="small"/>
        <TextField label="Description" variant="outlined" margin="dense" size="small"/>
        <Button variant="outlined" color="error">Delete</Button>
      </div>
    ));

    const eduForms = this.state.education.map(edu => (
      <div id={edu.id} className="education-form">
        <TextField label="Title" variant="outlined" margin="dense" size="small"/>
        <TextField label="Organization" variant="outlined" margin="dense" size="small"/>
        <TextField label="From" variant="outlined" margin="dense" size="small"/>
        <TextField label="To" variant="outlined" margin="dense" size="small"/>
        <Button variant="outlined" color="error">Delete</Button>
      </div>
    ));

    return (
      <div className="form-wrapper">
        <div className="personal-info-form">
          <h2>Personal Details</h2>
          <TextField id="nameInput" label="Full name" variant="outlined" margin="dense" size="small"/>
          <TextField id="titleInput" label="Title" variant="outlined" margin="dense" size="small"/>
          <TextField id="emailInput" label="Email" variant="outlined" margin="dense" size="small"/>
          <TextField id="phoneInput" label="Phone" variant="outlined" margin="dense" size="small"/>
          <TextField id="locationInput" label="Location" variant="outlined" margin="dense" size="small"/>
          <TextField id="personalDescInput" label="Description" variant="outlined" margin="dense" size="small"/>
        </div>

        <div className="work-form-wrapper">
          <h2>Work Experience</h2>
          {workForms}
          <Button variant="contained" onClick={this.addWorkForm}>Add</Button>
        </div>

        <div className="edu-form-wrapper">
          <h2>Education</h2>
          {eduForms}
          <Button variant="contained" onClick={this.addEducationForm}>Add</Button>
        </div>
      </div>
    )
  }
}

export default App;
