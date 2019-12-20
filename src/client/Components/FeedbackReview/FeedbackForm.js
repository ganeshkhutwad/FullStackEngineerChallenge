/**
 * Form to add feedback.
 * @author Ganesh Khutwad.
 */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';

// Feedback Form Component.
const FeedbackForm = (props) => {

	const onSubmit = values => {
		props.addFeedback(values);
	};

	return (
		<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
			<Form
				onSubmit={onSubmit}
				initialValues={{}}
				render={({ handleSubmit, reset, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit} noValidate>
					<Paper style={{ padding: 16 }}>
						<Grid container alignItems="flex-start" spacing={2}>
						{props.feedbackQuestions.map(feedbackQuestion => (
                            <Grid key={feedbackQuestion._id} item xs={12}>
                                <Field
                                    fullWidth
                                    required
                                    name={feedbackQuestion.name}
                                    component={TextField}
									multiline
                                    label={feedbackQuestion.name}
                                />
                            </Grid>
                        ))}
						
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

export default FeedbackForm;
