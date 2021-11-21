import React, { PureComponent } from "react";
import WorkFormUnit from "./WorkFormUnit";
import '../App.css';
import { Button } from '@mui/material';

class WorkForms extends PureComponent {
  render() {
    const workForms = this.props.workForms.map((form, index) => (
      <WorkFormUnit
        key={form.id}
        form={form}
        dateFrom={this.props.workForms[index].from} // need these to update datepicker smh
        dateTo={this.props.workForms[index].to}
        setWorkDate={this.props.setWorkDate}
        deleteWorkForm={this.props.deleteWorkForm}
        setWorkInfo={this.props.setWorkInfo} />
    ));

    return (
      <div className="work-form-wrapper">
        <h2>Work Experience</h2>
        {workForms}
        <Button variant="contained" onClick={this.props.addWorkForm}>Add</Button>
      </div>
    );
  }
}

export default WorkForms;