import React, { Component } from "react";
import './App.css';
import uniqid from "uniqid";
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';

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
      workForms: [
        {
          id: uniqid(),
          position: '',
          company: '',
          from: new Date(),
          to: new Date(),
          description: '',
        },
      ],
      eduForms: [
        {
          id: uniqid(),
          title: '',
          organization: '',
          from: new Date(),
          to: new Date(),
        }
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    //this.setWorkDate = this.setWorkDate.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
    this.setEducationDate = this.setEducationDate.bind(this);
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
    const forms = [...this.state.workForms, newForm];
    this.setState({
      workForms: forms,
    });
  }

  setWorkDate(obj,type,newDate) {
    const {workForms} = this.state;
    const target = workForms.filter(form => form.id === obj.id)[0];
    target[type] = newDate;
    const newForms = workForms.map(form => {
      if (form.id === target.id) {
        return target;
      } else {
        return form;
      }
    });
    this.setState({
      workForms: newForms,
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
    const forms = [...this.state.eduForms, newForm];
    this.setState({
      eduForms: forms,
    });
  }

  setEducationDate(obj, type, newDate) {
    const {eduForms} = this.state;
    const target = eduForms.filter(form => form.id === obj.id)[0];
    target[type] = newDate;
    const newForms = eduForms.map(form => {
      if (form.id === target.id) {
        return target;
      } else {
        return form;
      }
    });
    this.setState({
      eduForms: newForms,
    });
  }

  render() {
    const workForms = this.state.workForms.map(form => (
      <div id={form.id} className="work-form">

        <TextField label="Position" variant="outlined" margin="dense" size="small"/>

        <TextField label="Company" variant="outlined" margin="dense" size="small"/>

        <DatePicker
          label="From"
          views={['year', 'month']}
          value={form.from || new Date()}
          onChange={(newDate) => this.setWorkDate(form,"from",newDate)}
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="To"
          size="small"
          views={['year', 'month']}
          minDate={form.from}
          value={form.to || new Date()}
          onChange={(newDate) => this.setWorkDate(form,"to",newDate)}
          renderInput={(params) => <TextField {...params} />}
        />

        <TextField label="Description" variant="outlined" margin="dense" size="small" multiline="true" minRows="2" maxRows="2"/>
        
        <Button variant="outlined" color="error">Delete</Button>
      </div>
    ));

    const eduForms = this.state.eduForms.map(form => (
      <div id={form.id} className="education-form">

        <TextField label="Title" variant="outlined" margin="dense" size="small"/>

        <TextField label="Organization" variant="outlined" margin="dense" size="small"/>

        <DatePicker
          label="From"
          views={['year', 'month']}
          value={form.from || new Date()}
          onChange={(newDate) => this.setEducationDate(form,"from",newDate)}
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="To"
          views={['year', 'month']}
          minDate={form.from}
          value={form.to || new Date()}
          onChange={(newDate) => this.setEducationDate(form,"to",newDate)}
          renderInput={(params) => <TextField {...params} />}
        />

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
          <TextField id="personalDescInput" label="Description" variant="outlined" margin="dense" size="small" multiline="true" minRows="2" maxRows="2"/>
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        </LocalizationProvider>
      </div>
    )
  }
}

export default App;
