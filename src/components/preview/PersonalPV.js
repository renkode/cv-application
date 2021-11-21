import React, { Component } from "react";
import '../../App.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

class PersonalPV extends Component {
  render() {
    return (
      <div className="pv-personal">
        <div className="personal-wrapper">
          <div className="intro-column">
            <div className="intro">
              <div className="personal-name">{this.props.personalInfo.name}</div>
              <div className="divider"></div>
              <div className="personal-title">{this.props.personalInfo.title}</div>
            </div>
            <div className="contact-column">
              <div className="contact"><EmailIcon className="contact-icon" fontSize="small"/>{this.props.personalInfo.email}</div>
              <div className="contact"><LocalPhoneIcon className="contact-icon" fontSize="small"/>{this.props.personalInfo.phone}</div>
              <div className="contact"><LocationOnIcon className="contact-icon" fontSize="small"/>{this.props.personalInfo.location}</div>
              <div className="contact"><LanguageIcon className="contact-icon" fontSize="small"/>{this.props.personalInfo.website}</div>
            </div>
          </div>
        </div>
        <div className="desc-wrapper">
          <div className="label"><h3>Summary</h3></div>
          <div className="personal-desc">{this.props.personalInfo.description}</div>
        </div>
      </div>
    )
  }
}

export default PersonalPV;