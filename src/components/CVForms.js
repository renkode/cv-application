import React, { Component } from "react";
import '../App.css';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';

class CVForms extends Component {
  constructor(props){
    super(props);
    this.addWorkForm = this.props.addWorkForm.bind(this);
    this.deleteWorkForm = this.props.deleteWorkForm.bind(this);
    this.setWorkDate = this.props.setWorkDate.bind(this);
    this.addEducationForm = this.props.addEducationForm.bind(this);
    this.deleteEducationForm = this.props.deleteEducationForm.bind(this);
    this.setEducationDate = this.props.setEducationDate.bind(this);
  }

  render() {
    const workForms = this.props.workForms.map(form => (
      <div key={form.id} id={form.id} className="work-form">

        <TextField label="Position" variant="outlined" margin="dense" size="small"/>

        <TextField label="Company" variant="outlined" margin="dense" size="small"/>
        <div className="date-container">
          <DatePicker
            className="date-picker"
            label="From"
            views={['year']}
            value={form.from || new Date()}
            onChange={(newDate) => this.setWorkDate(form,"from",newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            className="date-picker"
            label="To"
            views={['year']}
            minDate={form.from}
            value={form.to || new Date()}
            onChange={(newDate) => this.setWorkDate(form,"to",newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <TextField label="Description" variant="outlined" margin="dense" size="small" minRows="2" maxRows="2"/>
        
        <Button className="delete-btn" onClick={this.deleteWorkForm(form.id)} variant="outlined" color="error">Delete</Button>
      </div>
    ));

    const eduForms = this.props.eduForms.map(form => (
      <div key={form.id} id={form.id} className="education-form">

        <TextField label="Title" variant="outlined" margin="dense" size="small"/>

        <TextField label="Organization" variant="outlined" margin="dense" size="small"/>
        
        <div className="date-container">
          <DatePicker
            className="date-picker"
            label="From"
            views={['year']}
            value={form.from || new Date()}
            onChange={(newDate) => this.setEducationDate(form,"from",newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            className="date-picker"
            label="To"
            views={['year']}
            minDate={form.from}
            value={form.to || new Date()}
            onChange={(newDate) => this.setEducationDate(form,"to",newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>

        <Button className="delete-btn" onClick={this.deleteEducationForm(form.id)} variant="outlined" color="error">Delete</Button>
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
          <TextField id="personalDescInput" label="Description" variant="outlined" margin="dense" size="small" multiline minRows="2" maxRows="2"/>
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

export default CVForms;
