import React, { PureComponent } from "react";
import '../App.css';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';

class WorkFormUnit extends PureComponent {
  render() {
    const { form } = this.props;
    return (
      <div id={form.id} className="work-form">
        <TextField defaultValue={form.position} onChange={this.props.setWorkInfo(form.id, "position")} label="Position" variant="outlined" margin="dense" size="small" />
        <TextField defaultValue={form.company} onChange={this.props.setWorkInfo(form.id, "company")} label="Company" variant="outlined" margin="dense" size="small" />

        <div className="date-container">
          <DatePicker
            className="date-picker"
            label="From"
            views={['year']}
            value={form.from}
            onChange={(newDate) => this.props.setWorkDate(form, "from", newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            className="date-picker"
            label="To"
            views={['year']}
            minDate={form.from}
            value={form.to}
            onChange={(newDate) => this.props.setWorkDate(form, "to", newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>

        <TextField defaultValue={form.description} onChange={this.props.setWorkInfo(form.id, "description")} label="Description" variant="outlined" margin="dense" size="small" multiline minRows="2" maxRows="2" />
        <Button className="delete-btn" onClick={this.props.deleteWorkForm(form.id)} variant="outlined" color="error">Delete</Button>
      </div>
    )
  }
}

export default WorkFormUnit;