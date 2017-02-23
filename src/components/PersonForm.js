import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {
	TextField,
	Checkbox,
	SelectField,
	MenuItem,
	RadioButton,
	RadioButtonGroup,
	RaisedButton
} from 'material-ui'
import { browserHistory } from 'react-router'

import './PersonForm.css'

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

	return `(${onlyNums.slice(0, 3)})-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
		hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
		style={{ maxWidth: '500px', width: '100%' }}
    {...input}
    {...custom}
  />
)

const renderRadioGroup = ({ input, ...rest }) => (
	<RadioButtonGroup {...input} {...rest}
		valueSelected={input.value}
		onChange={(event, value) => input.onChange(value)}
	/>
)

const renderCheckbox = ({ input, label }) => (
	<Checkbox
		label={label}
		checked={input.value ? true : false}
		onCheck={input.onChange}
	/>
)

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom}) => (
	<SelectField
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		onChange={(event, index, value) => input.onChange(value)}
		children={children}
		{...custom}
	/>
)

class PersonForm extends React.Component {
	render () {

		const { handleSubmit, pristine, reset, submitting } = this.props

		return (
			<form onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<Field name="firstName" component={renderTextField} label="First Name" />
				</div>
				<div className="input-wrapper">
					<Field name="lastName" component={renderTextField} label="Last Name" />
				</div>
				<div className="input-wrapper">
					<Field name="email" component={renderTextField} label="Email" />
				</div>
				<div className="input-wrapper">
					<Field name="phone" component={renderTextField} normalize={normalizePhone} label="Phone" />
				</div>
				<div className="input-wrapper">
					<Field name="sex" component={renderRadioGroup}>
						<RadioButton value="male" label="male" />
						<RadioButton value="female" label="female" />
					</Field>
				</div>
				<div className="input-wrapper">
					<Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
						<MenuItem value={'ff0000'} primaryText="Red" />
						<MenuItem value={'00ff00'} primaryText="Green" />
						<MenuItem value={'0000ff'} primaryText="Blue" />
					</Field>
				</div>
				<div className="input-wrapper">
					<Field name="employed" component={renderCheckbox} label="Employed" />
				</div>
				<div className="input-wrapper">
					<Field
						name="notes"
						component={renderTextField}
						label="Notes"
						multiLine={true}
						rows={3}
					/>
				</div>
				<div className="button-group input-wrapper">
					<RaisedButton
						type="submit"
						primary={true}
						disabled={pristine || submitting}
						style={{ marginRight: '24px', }}
						className="button">
						Submit
					</RaisedButton>
					<RaisedButton
						type="button"
						className="button"
						secondary={true}
						disabled={pristine || submitting}
						onClick={reset}>
						Clear Values
					</RaisedButton>
				</div>
			</form>
		)
	}
}

export const CreateForm = reduxForm({
	form: 'createForm',
	validate,
	onSubmitSuccess: () => {
		browserHistory.push('/')
	}
})(PersonForm)

export const EditForm = reduxForm({
	form: 'editForm',
	validate,
	onSubmitSuccess: () => {
		browserHistory.push('/')
	}
})(PersonForm)
