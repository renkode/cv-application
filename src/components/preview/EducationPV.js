import React, { PureComponent } from "react";
import '../../App.css';
import getYear from 'date-fns/getYear';

class EducationPV extends PureComponent {
  render() {
    const forms = this.props.eduForms.map(form => (
      <div key={form.id} className="pv-edu-form">
        <div className="date-column">{getYear(form.from)}—<br />{getYear(form.to)}</div>
        <div className="edu-info-column">
          <div className="title-wrapper">
            <span className="title">{form.title}</span>
            <span>  |  </span>
            <span className="organization">{form.organization}</span>
          </div>
          <div>{form.description}</div>
        </div>
      </div>
    ));
    return (
      <div className="pv-edu-wrapper">
        <div className="label"><h3>Education</h3></div>
        {forms}
      </div>
    )
  }
}

export default EducationPV;