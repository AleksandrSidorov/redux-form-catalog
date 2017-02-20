import React from 'react'
import { Field } from 'redux-form'

import { FormRadio } from './FormRadio'
import { FormField } from './FormField'

export class ProfileFields extends React.Component {
	render() {
		return (
			<div>
				<Field
					component={FormRadio}
					label="Type"
					name="type"
					options={[
						{ label: "Human", value: "human" },
						{ label: "Alien", value: "alien" },
						{ label: "Cyborg", value: "cyborg" }
					]}
				/>
				<FormField
					fields={[
						{
							name: 'firstLastName',
							placeholder: 'First and Last Name',
							type: 'text'
						}
					]}
				/>
				<FormField
					fields={[
						{
							name: 'phoneNumber',
							placeholder: 'Phone Number',
							type: 'tel'
						}
					]}
				/>
			</div>
		)
	}
}