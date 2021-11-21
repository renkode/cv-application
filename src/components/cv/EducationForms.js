import React, { PureComponent } from "react";
import EduFormUnit from "./EduFormUnit";
import '../../App.css';
import { Button } from '@mui/material';

class EducationForms extends PureComponent {
  render() {
    const eduForms = this.props.eduForms.map((form, index) => (
      <EduFormUnit
        key={form.id}
        form={form}
        dateFrom={this.props.eduForms[index].from} // need these to update datepicker smh
        dateTo={this.props.eduForms[index].to}
        setEducationDate={this.props.setEducationDate}
        deleteEducationForm={this.props.deleteEducationForm}
        setEducationInfo={this.props.setEducationInfo} />
    ));

    return (
      <div className="edu-form-wrapper">
        <h2>Education</h2>
        {eduForms}
        <Button variant="contained" onClick={this.props.addEducationForm}>Add</Button>
      </div>
    );
  }
}

export default EducationForms;