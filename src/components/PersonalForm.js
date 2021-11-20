import React, { PureComponent } from "react";
import '../App.css';
import { TextField } from '@mui/material';

class PersonalForm extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="personal-info-form">
          <h2>Personal Details</h2>
          <TextField onChange={this.props.setPersonalInfo("name")} id="nameInput" label="Full name" variant="outlined" margin="dense" size="small"/>
          <TextField onChange={this.props.setPersonalInfo("title")} id="titleInput" label="Title" variant="outlined" margin="dense" size="small"/>
          <TextField onChange={this.props.setPersonalInfo("email")} id="emailInput" label="Email" variant="outlined" margin="dense" size="small"/>
          <TextField onChange={this.props.setPersonalInfo("phone")} id="phoneInput" label="Phone" variant="outlined" margin="dense" size="small"/>
          <TextField onChange={this.props.setPersonalInfo("location")} id="locationInput" label="Location" variant="outlined" margin="dense" size="small"/>
          <TextField onChange={this.props.setPersonalInfo("description")} id="personalDescInput" label="Description" variant="outlined" margin="dense" size="small" multiline minRows="2" maxRows="2"/>
      </div>
		)
	}
}

export default PersonalForm;