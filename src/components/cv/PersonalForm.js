import React, { PureComponent } from "react";
import '../../App.css';
import { TextField } from '@mui/material';

class PersonalForm extends PureComponent {
  render() {
    const { name, title, email, phone, location, website, description } = this.props.personalInfo;
    return (
      <div className="personal-info-form">
        <h2>Personal Details</h2>
        <TextField defaultValue={name} onChange={this.props.setPersonalInfo("name")} label="Full name" variant="outlined" margin="dense" size="small" />
        <TextField defaultValue={title} onChange={this.props.setPersonalInfo("title")} label="Title" variant="outlined" margin="dense" size="small" />
        <TextField defaultValue={email} onChange={this.props.setPersonalInfo("email")} label="Email" variant="outlined" margin="dense" size="small" />
        <TextField defaultValue={phone} onChange={this.props.setPersonalInfo("phone")} label="Phone" variant="outlined" margin="dense" size="small" />
        <TextField defaultValue={location} onChange={this.props.setPersonalInfo("location")} label="Location" variant="outlined" margin="dense" size="small" />
        <TextField defaultValue={website} onChange={this.props.setPersonalInfo("website")} label="Website" variant="outlined" margin="dense" size="small" />
        <TextField defaultValue={description} onChange={this.props.setPersonalInfo("description")} id="personalDescInput" label="Description" variant="outlined" margin="dense" size="small" multiline minRows="2" maxRows="2" />
      </div>
    )
  }
}

export default PersonalForm;