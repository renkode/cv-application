import React, { PureComponent } from "react";
import '../../App.css';
import getYear from 'date-fns/getYear';

class WorkPV extends PureComponent {
  render() {
    const forms = this.props.workForms.map(form => (
      <div key={form.id} className="pv-work-form">
        <div className="date-column">{getYear(form.from)}—<br />{getYear(form.to)}</div>
        <div className="work-info-column">
          <div className="title-wrapper">
            <span className="title">{form.position}</span>
            <span>  |  </span>
            <span className="organization">{form.company}</span>
          </div>
          <div>{form.description}</div>
        </div>
      </div>
    ));
    return (
      <div className="pv-work-wrapper">
        <div className="label"><h3>Work Experience</h3></div>
        {forms}
      </div>
    )
  }
}

export default WorkPV;