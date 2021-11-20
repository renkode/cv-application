import React, { PureComponent } from "react";
import '../App.css';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';

class EduFormUnit extends PureComponent {
	constructor(props) {
		super(props);
	}
  render() {
    const { form } = this.props;
    return (
      <div key={form.id} id={form.id} className="education-form">
				<TextField onChange={this.props.setEducationInfo(form.id, "title")} label="Title" variant="outlined" margin="dense" size="small" />
				<TextField onChange={this.props.setEducationInfo(form.id, "organization")} label="Organization" variant="outlined" margin="dense" size="small" />

				<div className="date-container">
					<DatePicker
						className="date-picker"
						label="From"
						views={['year']}
						value={form.from}
						onChange={(newDate) => this.props.setEducationDate(form, "from", newDate)}
						renderInput={(params) => <TextField {...params} />}
					/>
					<DatePicker
						className="date-picker"
						label="To"
						views={['year']}
						minDate={form.from}
						value={form.to}
						onChange={(newDate) => this.props.setEducationDate(form, "to", newDate)}
						renderInput={(params) => <TextField {...params} />}
					/>
				</div>

				<Button className="delete-btn" onClick={this.props.deleteEducationForm(form.id)} variant="outlined" color="error">Delete</Button>
			</div>
    )
  }
}

export default EduFormUnit;