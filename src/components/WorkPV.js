import React, { PureComponent } from "react";
import '../App.css';
import getYear from 'date-fns/getYear';

class WorkPV extends PureComponent {
  render() {
    const forms = this.props.workForms.map(form => (
      <div key={form.id} className="pv-work-form">
        <p>{form.position}</p>
        <p>{form.company}</p>
        <div>{getYear(form.from)}-{getYear(form.to)}</div>
        <p>{form.description}</p>
      </div>
    ));
    return (
      <div className="pv-work-wrapper">
        {forms}
      </div>
    )
  }
}

export default WorkPV;