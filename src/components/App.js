import React, { Component } from "react";
import CVForms from "./CVForms";
import Preview from "./Preview";
import '../App.css';
import uniqid from "uniqid";

class App extends Component {
	constructor() {
		super();
		this.state = {
			personalInfo: {
				name: '',
				title: '',
				email: '',
				phone: '',
				location: '',
				description: '',
			},
			workForms: [
				{
					id: uniqid(),
					position: '',
					company: '',
					from: new Date(),
					to: new Date(),
					description: '',
				},
			],
			eduForms: [
				{
					id: uniqid(),
					title: '',
					organization: '',
					from: new Date(),
					to: new Date(),
				}
			]
		}
		this.setPersonalInfo = this.setPersonalInfo.bind(this);

		this.addWorkForm = this.addWorkForm.bind(this);
		this.deleteWorkForm = this.deleteWorkForm.bind(this);
		this.setWorkDate = this.setWorkDate.bind(this);
		this.setWorkInfo = this.setWorkInfo.bind(this);

		this.addEducationForm = this.addEducationForm.bind(this);
		this.deleteEducationForm = this.deleteEducationForm.bind(this);
		this.setEducationDate = this.setEducationDate.bind(this);
		this.setEducationInfo = this.setEducationInfo.bind(this);
	}

	setPersonalInfo = (type) => (e) => {
		const info = this.state.personalInfo;
		info[type] = e.target.value;
		this.setState({
			personalInfo: info
		});
	}

	addWorkForm() {
		const newForm = {
			id: uniqid(),
			position: '',
			company: '',
			from: new Date(),
			to: new Date(),
			description: '',
		};
		const forms = [...this.state.workForms, newForm];
		this.setState({
			workForms: forms,
		});
	}

	deleteWorkForm = (formId) => (event) => {
		// need event paramater to work lol idk why
		const forms = [...this.state.workForms];
		const index = forms.map(form => form.id).indexOf(formId);
		forms.splice(index, 1);
		this.setState({
			workForms: forms,
		});
	}

	setWorkDate(obj, type, newDate) {
		const { workForms } = this.state;
		const target = workForms.filter(form => form.id === obj.id)[0];
		target[type] = newDate;
		const newForms = workForms.map(form => {
			if (form.id === target.id) {
				return target;
			} else {
				return form;
			}
		});
		this.setState({
			workForms: newForms,
		});
	}

	setWorkInfo = (formId, type) => (e) => {
		const forms = [...this.state.workForms];
		const index = forms.map(form => form.id).indexOf(formId);
		forms[index][type] = e.target.value;
		this.setState({
			workForms: forms,
		});
	}

	addEducationForm() {
		const newForm = {
			id: uniqid(),
			title: '',
			organization: '',
			from: new Date(),
			to: new Date()
		};
		const forms = [...this.state.eduForms, newForm];
		this.setState({
			eduForms: forms,
		});
	}

	deleteEducationForm = (formId) => (event) => {
		// need event paramater to work lol idk why
		const forms = [...this.state.eduForms];
		const index = forms.map(form => form.id).indexOf(formId)
		forms.splice(index, 1);
		this.setState({
			eduForms: forms,
		});
	}

	setEducationDate(obj, type, newDate) {
		const { eduForms } = this.state;
		const target = eduForms.filter(form => form.id === obj.id)[0];
		target[type] = newDate;
		const newForms = eduForms.map(form => {
			if (form.id === target.id) {
				return target;
			} else {
				return form;
			}
		});
		this.setState({
			eduForms: newForms,
		});
	}

	setEducationInfo = (formId, type) => (e) => {
		const forms = [...this.state.eduForms];
		const index = forms.map(form => form.id).indexOf(formId);
		forms[index][type] = e.target.value;
		this.setState({
			eduForms: forms,
		});
	}

	render() {
		const { personalInfo, workForms, eduForms } = this.state;

		return (
			<div className="app">
				<CVForms 
					setPersonalInfo={this.setPersonalInfo}

					addWorkForm={this.addWorkForm} 
					deleteWorkForm={this.deleteWorkForm} 
					setWorkDate={this.setWorkDate}
					setWorkInfo={this.setWorkInfo}

					addEducationForm={this.addEducationForm}
					deleteEducationForm={this.deleteEducationForm}
					setEducationDate={this.setEducationDate} 
					setEducationInfo={this.setEducationInfo}

					personalInfo={personalInfo} 
					workForms={workForms} 
					eduForms={eduForms}/>
				<Preview />
			</div>
		)
	}
}

export default App;