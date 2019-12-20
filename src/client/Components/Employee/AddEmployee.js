/**
 * Add Employee Form Component.
 * @author Ganesh Khutwad.
 */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Paper,
  Grid,
  Button,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';

// For form validation.
const validate = values => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = 'Required';
	}
	if (!values.lastName) {
		errors.lastName = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	}
	return errors;
};


const AddEmployee = (props) => {

	const onSubmit = values => props.addEmployee(values);

	return (
		<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
			<Form
				onSubmit={onSubmit}
				initialValues={{}}
				validate={validate}
				render={({ handleSubmit, reset, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit} noValidate>
					<Paper style={{ padding: 16 }}>
						<Grid container alignItems="flex-start" spacing={2}>
						<Grid item xs={6}>
							<Field
							fullWidth
							required
							name="firstName"
							component={TextField}
							type="text"
							label="First Name"
							/>
						</Grid>
						<Grid item xs={6}>
							<Field
							fullWidth
							required
							name="lastName"
							component={TextField}
							type="text"
							label="Last Name"
							/>
						</Grid>
						<Grid item xs={12}>
							<Field
							name="email"
							fullWidth
							required
							component={TextField}
							type="email"
							label="Email"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
							label="Reviewer"
							control={
								<Field
								name="reviewer"
								component={Checkbox}
								type="checkbox"
								/>
							}
							/>
						</Grid>
						{values.reviewer && (
							<Grid item>
								<FormControl component="fieldset">
									<FormLabel component="legend">
										Employees List: Choose employees which need performance feedback
									</FormLabel>
									<FormGroup row>
										{props.employees.map(employee => (
											<FormControlLabel
												label={`${employee.firstName} ${employee.lastName}`}
												control={
												<Field
													name="reviews"
													component={Checkbox}
													type="checkbox"
													value={employee._id}
												/>
											}
											/>
										))}
									</FormGroup>
								</FormControl>
							</Grid>
						)}
						<Grid item style={{ marginTop: 16 }}>
							<Button
							type="button"
							variant="contained"
							onClick={reset}
							disabled={submitting || pristine}
							>
							Reset
							</Button>
						</Grid>
						<Grid item style={{ marginTop: 16 }}>
							<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={submitting}
							>
							Submit
							</Button>
						</Grid>
						</Grid>
					</Paper>
					</form>
				)}
			/>
		</div>
	);
}

export default AddEmployee;
