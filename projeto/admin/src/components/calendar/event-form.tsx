import { Dialog, DialogTitle, DialogContent, Grid, IconButton, CircularProgress, Button } from "@material-ui/core";
import { formatISO } from "date-fns";

import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { TimePicker, DatePicker, DateTimePicker } from 'formik-material-ui-pickers';
import { ChangeEventHandler, useState } from "react";
import RRuleGenerator from "react-rrule-generator-semantic";
import CloseIcon from '@material-ui/icons/Close';
import * as Yup from 'yup';
import { DateSelectArg } from "@fullcalendar/react";
import { Tracing } from "trace_events";

interface EventFormProps {
    open: boolean;
    onClose: ChangeEventHandler<HTMLInputElement>;
    event?: DateSelectArg;
}

const EventForm = (props: EventFormProps) => {
    const [rrule, setRrule] = useState('RRULE:FREQ=DAILY;INTERVAL=1');
    console.log(rrule);
    const { open, onClose, event } = props;

    return (
        <Dialog open={open} onClose={onClose} aria-labeled-by="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add a new event</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{
                        title: '',
                        start: event?.start ?? new Date(),
                        durationMinutes: event === undefined ? 30 : (event.end.getTime() - event.start.getTime()) / (60 * 1000),
                        isRecurring: false,
                        rrule: 'test',
                        guests: [],
                        description: '',
                    }}
                    validationSchema={
                        Yup.object().shape({
                            title: Yup.string().required(),
                            start: Yup.date().required(),
                            durationMinutes: Yup.number().integer().min(10),
                            isRecurring: Yup.boolean().required(),
                            rrule: Yup.string().when('isRecurring', { is: true, then: Yup.string().required() }),
                            guests: Yup.array().of(Yup.string().email().required()),
                            description: Yup.string(),
                        })}
                    onSubmit={async (values) => {
                        const { title, start, durationMinutes, rrule, isRecurring } = values;
                        if (!event) {
                            return;
                        }
                        const calendarApi = event.view.calendar;
                        const durationMs = durationMinutes * 60 * 1000;

                        let newEvent: Record<string, any> = { title, allDay: false };
                        if (isRecurring) {
                            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                            const isoDatetime = formatISO(start, { format: "basic" }).slice(0, 15);  // Slice removes the timezone element
                            const formattedRrule = `DTSTART;TZID=${timezone}:${isoDatetime}\n${rrule}`;
                            newEvent.rrule = formattedRrule;
                            newEvent.duration = durationMs;
                        } else {
                            newEvent.start = start;
                            newEvent.end = new Date(start.getTime() + durationMs);
                        }
                        console.log(newEvent);
                        calendarApi?.addEvent(newEvent);
                        return new Promise(res => setTimeout(res, 2500));
                    }}
                >
                    {({ values, errors, isSubmitting, submitForm, setFieldValue }) => (
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
                                    <Field name="isRecurring" Label={{ label: "Recurring event?" }} type="checkbox" component={CheckboxWithLabel} />
                                </Grid>
                                {
                                    values.isRecurring &&
                                    <Grid item>
                                        <RRuleGenerator
                                            value={rrule}
                                            onChange={(rule: string) => { setFieldValue('rrule', rule); setRrule(rule); }}
                                            config={{
                                                repeat: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
                                                end: ['Never', 'After'],
                                                weekStartsOnSunday: false,  // The FullCalendar RRule plugin can't handle this being true?
                                            }}
                                        />
                                    </Grid>
                                }
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