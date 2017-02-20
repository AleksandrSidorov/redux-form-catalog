import React from 'react'

export class FormRadio extends React.Component {
	render() {

		const {
			hint,
			input: {
				value,
				name
			},
			meta: {
				error,
				touched
			},
			options
		} = this.props
		const message = (touched && error) || hint

		return (
			<div>
				{options.map((field, key) => {
					return (
						<div {...{key}}>
							<input
								checked={value === field.value}
								id={`${name}-${key}`}
								type="radio"
								value={field.value}
								{...{name}}
							/>
							<label htmlFor={`${name}-${key}`}>
								{field.label}
							</label>
						</div>
					)
				})}
				<div>{message}</div>
			</div>
		)
	}
}