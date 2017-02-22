import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField, CheckBox, SelectField, MenuItem } from 'material-ui'

const validate = values => {
	const errors = {}

	const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor']
	requiredFields.forEach(field => {
		if (!values[ field ]) {
			errors[ field ] = 'Required'
		}
	})

	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	return errors
}

const normalizePhone = value => {
	if (!value) {
		return value
	}

	const onlyNums = value.replace(/[^\d]/g, '')

	if (onlyNums.length <= 3) {
		return onlyNums
	}

	if (onlyNums.length <= 7) {
		return `(${onlyNums.slice(0, 3)})-${onlyNums.slice(3)}`
	}

	return `(${onlyNums.slice(0, 3)})-${onlyNums.slice(3, 6)}-${onlyNums.slice(6)}`
}
const renderCheckbox = ({ input, label }) => {
	<CheckBox
		label={label}
		checked={input.value ? true : false}
		onCheck={input.onChange}
	/>
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
	<TextField
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
}


class PersonForm extends React.Component {
	render () {

		const { handleSubmit, pristine, reset, submitting } = this.props

		return (
			<form onSubmit={handleSubmit}>
				<h3>form</h3>
				<div>
					<label>First Name</label>
					<div>
						<Field name="firstName" component={renderTextField} placeholder="First Name" />
					</div>
				</div>
				<div>
					<label>Last Name</label>
					<div>
						<Field name="lastName" component={renderTextField} placeholder="Last Name" />
					</div>
				</div>
				<div>
					<label>Email</label>
					<div>
						<Field name="email" component="input" type="email" placeholder="Email" />
					</div>
				</div>
				<div>
					<label>Phone</label>
					<div>
						<Field name="phone" component="input" normalize={normalizePhone} type="tel" placeholder="Phone" />
					</div>
				</div>
				<div>
					<label>Sex</label>
					<div>
						<label><Field name="sex" component="input" type="radio" value="male" />Male</label>
						<label><Field name="sex" component="input" type="radio" value="female" />Female</label>
					</div>
				</div>
				<div>
					<label>Favorite Color</label>
					<div>
						<Field name="favoriteColor" component="select">
							<option></option>
							<option value="ff0000">Red</option>
							<option value="00ff00">Green</option>
							<option value="0000ff">Blue</option>
						</Field>
					</div>
				</div>
				<div>
					<label htmlFor="employed">Employed</label>
					<div>
						<Field name="employed" id="employed" component="input" type="checkbox" />
					</div>
				</div>
				<div>
					<label>Notes</label>
					<div>
						<Field name="notes" component="textarea" />
					</div>
				</div>
				<div>
					<button type="submit" disabled={pristine || submitting}>Submit</button>
					<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
				</div>
			</form>
		)
	}
}

export const CreateForm = reduxForm({
	form: 'createForm',
	validate
})(PersonForm)

export const EditForm = reduxForm({
	form: 'editForm',
	validate
})(PersonForm)
