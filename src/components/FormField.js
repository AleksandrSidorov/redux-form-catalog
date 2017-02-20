import React from 'react'
import { Field, Fields } from 'redux-form'

export class FormField extends React.Component {
	
	renderFields(props) {
		const {
			fields,
			hint
		} = props

		return (
			<div>
				{fields.map((field, key) => {
					const {
						format,
						name,
						placeholder,
						type
					} = field
					return (
						<Field
							component="input"
							{...{key, placeholder, type, format, name}}
						/>
					)
				})}
			</div>
		)
	}

	render () {
		
		const {
			fields,
			hint
		} = this.props

		return (
			<Fields
				component={this.renderFields}
				names={fields.map(({name}) => name)}
				{...{fields, hint}}
			/>
		)
	}
}