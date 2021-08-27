import formatISO from 'date-fns/formatISO';
import FullCalendar, { DateSelectArg } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import { useState } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, } from "@material-ui/core";
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { DatePicker, DateTimePicker } from 'formik-material-ui-pickers';
import * as Yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import RRuleGenerator from "react-rrule-generator-semantic";

function createEventId() {
  return Math.floor(Math.random() * 1000);
}

interface CalendarProps {
  weekendVisible: boolean;
}

const Calendar = (props: CalendarProps) => {
  const { weekendVisible } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DateSelectArg | undefined>();
  const [rrule, setRrule] = useState('RRULE:FREQ=DAILY;INTERVAL=1');
  const handleClose = () => {
    setOpen(false);
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelected(selectInfo);
    setOpen(true);
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // clear date selection
    // console.log(selectInfo);

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   })
    // }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labeled-by="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new event</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              title: '',
              start: selected?.start ?? new Date(),
              end: selected?.end ?? new Date(),
              isRecurring: false,
              rrule,
              guests: [],
              description: '',
            }}
            validationSchema={
              Yup.object().shape({
                title: Yup.string().required(),
                start: Yup.date().required(),
                end: Yup.date().required().min(Yup.ref('start')),
                isRecurring: Yup.boolean().required(),
                rrule: Yup.string().when('isRecurring', { is: true, then: Yup.string().required() }),
                guests: Yup.array().of(Yup.string().email().required()),
                description: Yup.string(),
              })}
            onSubmit={async (values) => {
              const { title, start, end, rrule, isRecurring } = values;
              const calendarApi = selected?.view.calendar;
              const duration = end.valueOf() - start.valueOf();
              const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
              const isoDatetime = formatISO(start, { format: "basic" }).slice(0, 15);  // Slice removes the timezone element
              const formattedRrule = `DTSTART;TZID=${timezone}:${isoDatetime}\n${rrule}`;
              const event = {
                title,
                rrule: isRecurring ? formattedRrule : undefined,
                allDay: false,
                duration: isRecurring ? duration : undefined,
              };
              console.log(event);
              calendarApi?.addEvent(event);
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
                    <Field name="start" label="Start Time" component={DateTimePicker} disablePast={true} openTo="minutes" />
                  </Grid>
                  <Grid item>
                    <Field name="end" label="End Time" component={DateTimePicker} disablePast={true} openTo="minutes" />
                  </Grid>
                  <Grid item>
                    <Field name="isRecurring" Label={{ label: "Is recurring?" }} type="checkbox" component={CheckboxWithLabel} />
                  </Grid>
                  {
                    values.isRecurring &&
                    <Grid item>
                      <RRuleGenerator
                        onChange={(rule: string) => { setRrule(rule); setFieldValue('rrule', rule); }}
                        value={rrule}
                        config={{
                          repeat: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
                          end: ['Never', 'After'],
                          weekStartsOnSunday: false,
                        }}
                      />
                    </Grid>
                  }
                  <FieldArray name="guests">
                    {(arrayHelpers) => (
                      <>
                        {values.guests.map((_, index) => (
                          <Grid item key={index}>
                            <Field name={`guests.${index}`} label="Guest's email" component={TextField} />
                            <IconButton onClick={() => arrayHelpers.remove(index)}>
                              <CloseIcon style={{ fill: 'black' }} />
                            </IconButton>
                          </Grid>
                        ))}
                        <Grid item>
                          <Button color="secondary" onClick={() => arrayHelpers.push('')}>Add guest</Button>
                        </Grid>
                      </>
                    )}
                  </FieldArray>
                  <Grid item>
                    <Button color="primary" variant="contained" onClick={submitForm} disabled={isSubmitting} startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}>
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
              </Form>
            )}

          </Formik>
        </DialogContent>
      </Dialog>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,dayGridMonth'
        }}
        editable={true}
        selectable={true}
        selectAllow={(span) => !span.allDay}
        select={handleDateSelect}
        weekends={weekendVisible}
        allDaySlot={false}
        nowIndicator={true}
      />
    </>
  );
}



export default Calendar;