import { Dialog, DialogTitle, DialogContent, Grid, IconButton, CircularProgress, Button } from "@material-ui/core";
import { formatISO } from "date-fns";

import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { TimePicker, DatePicker, DateTimePicker } from 'formik-material-ui-pickers';
import { ChangeEventHandler, useState } from "react";
import * as Yup from 'yup';
import {CalendarApi, DateSpanApi} from "@fullcalendar/react";

interface EventFormProps {
    open: boolean;
    onClose: ChangeEventHandler<HTMLInputElement>;
    event?: DateSpanApi;
    calendar?: CalendarApi,
}

const EventForm = (props: EventFormProps) => {
    const { open, onClose, event, calendar } = props;

    return (
        <Dialog open={open} onClose={onClose} aria-labeled-by="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a new event</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{
                        title: '',
                        start: event?.start ?? new Date(),
                        durationMinutes: event === undefined ? 30 : (event.end.getTime() - event.start.getTime()) / (60 * 1000),
                        description: '',
                    }}
                    validationSchema={
                        Yup.object().shape({
                            title: Yup.string().required(),
                            start: Yup.date().required(),
                            durationMinutes: Yup.number().integer().min(10),
                            description: Yup.string(),
                        })}
                    onSubmit={async (values) => {
                        const { title, start, durationMinutes, } = values;
                        if (!event) {
                            return;
                        }
                        const durationMs = durationMinutes * 60 * 1000;

                        let newEvent: Record<string, any> = { title, allDay: false };
                        newEvent.start = start;
                        newEvent.end = new Date(start.getTime() + durationMs);
                        calendar?.addEvent(newEvent);
                        return new Promise(res => setTimeout(res, 2500));
                    }}
                >
                    {({ values, errors, isSubmitting, submitForm }) => (
                        <Form>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Field name="title" label="Title" component={TextField} />
                                </Grid>
                                <Grid item>
                                    <Field name="description" label="Description" component={TextField} multiline={true} />
                                </Grid>
                                <Grid item>
                                    <Field name="start" label="Start Time" component={TimePicker} openTo="minutes" ampm={false} />
                                </Grid>
                                <Grid item>
                                    <Field name="durationMinutes" label="Duration (minutes)" type="number" min={10} component={TextField} />
                                </Grid>
                                <Grid item>
                                    <Field name="end" label="End Time" component={TimePicker} ampm={false} disabled={true} value={new Date(values.start.getTime() + values.durationMinutes * 60 * 1000)} />
                                </Grid>
                                <Grid item>
                                    <Button color="primary" variant="contained" onClick={submitForm} disabled={isSubmitting} startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}>
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                            <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
                        </Form>
                    )}
                </Formik >
            </DialogContent >
        </Dialog >
    );
}


export default EventForm;