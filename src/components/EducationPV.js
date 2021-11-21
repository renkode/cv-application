import React, { PureComponent } from "react";
import '../App.css';
import getYear from 'date-fns/getYear';

class EducationPV extends PureComponent {
  render() {
    const forms = this.props.eduForms.map(form => (
      <div key={form.id} className="pv-edu-form">
        <p>{form.title}</p>
        <p>{form.organization}</p>
        <div>{getYear(form.from)}-{getYear(form.to)}</div>
      </div>
    ));
    return (
      <div className="pv-edu-wrapper">
        {forms}
      </div>
    )
  }
}

export default EducationPV;