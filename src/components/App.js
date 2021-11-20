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

		this.addWorkForm = this.addWorkForm.bind(this);
		this.deleteWorkForm = this.deleteWorkForm.bind(this);
		this.setWorkDate = this.setWorkDate.bind(this);
		this.addEducationForm = this.addEducationForm.bind(this);
		this.deleteEducationForm = this.deleteEducationForm.bind(this);
		this.setEducationDate = this.setEducationDate.bind(this);
	}

	addWorkForm() {
		const newForm = {
			id: uniqid(),
			position: '',
			company: '',
			from: '',
			to: '',
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
		const index = forms.map(form => form.id).indexOf(formId)
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

	addEducationForm() {
		const newForm = {
			id: uniqid(),
			title: '',
			organization: '',
			from: '',
			to: ''
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

	render() {
		const { personalInfo, workForms, eduForms } = this.state;

		return (
			<div className="app">
				<CVForms 
					addWorkForm={this.addWorkForm} 
					deleteWorkForm={this.deleteWorkForm} 
					setWorkDate={this.setWorkDate} 
					addEducationForm={this.addEducationForm}
					deleteEducationForm={this.deleteEducationForm}
					setEducationDate={this.setEducationDate} 
					personalInfo={personalInfo} 
					workForms={workForms} 
					eduForms={eduForms}/>
				<Preview />
			</div>
		)
	}
}

export default App;