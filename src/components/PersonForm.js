import React from 'react'
import { reduxForm, FormSection } from 'redux-form'

import { ProfileFields } from './ProfileFields'
import { FormButton } from './FormButton'

class PersonForm extends React.Component {
	render () {

		const { handleSubmit } = this.props

		return (
			<form onSubmit={handleSubmit}>
				<h3>form</h3>
				<FormSection name="profile">
					<ProfileFields />
				</FormSection>
				<FormButton label="Submit" type="submit" />
			</form>
		)
	}
}

export const CreateForm = reduxForm({
	form: 'createForm',
})(PersonForm)

export const EditForm = reduxForm({
	form: 'editForm',
})(PersonForm)