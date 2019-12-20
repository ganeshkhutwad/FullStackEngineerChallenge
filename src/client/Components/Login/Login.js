import React, {useEffect} from 'react';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';

const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	}
	if (!values.password) {
		errors.password = 'Required';
	}
	return errors;
};

const Login = (props) => {

	const onSubmit = values => props.actions.login(values);

    useEffect(() => {
        if (props.loginStatus) {
            props.history.push('/views');
        } else {
            console.log('Error while logging...');
        }
    }, [props.loginStatus]);

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
						<Grid item xs={12}>
							<Field
							fullWidth
							required
							name="email"
							component={TextField}
							type="email"
							label="Email"
							/>
						</Grid>
						<Grid item xs={12}>
							<Field
							fullWidth
							required
							name="password"
							component={TextField}
							type="password"
							label="Password"
							/>
						</Grid>
						<Grid item style={{ marginTop: 16 }}>
							<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={submitting}
							>
							Login
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

export default Login;
