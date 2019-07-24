import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, type, onChange, placeholder, value, error }) => {
	return (
		<div className='form-group'>
			<label htmlFor={label}>{label}</label>
			<div className='field'>
				<input
					type={type}
					name={name}
					className='form-control'
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>

				{error && (
					<div style={{ marginTop: 5 }} className='alert alert-danger' role='alert'>
						{error}
					</div>
				)}
			</div>
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};

export default TextInput;
