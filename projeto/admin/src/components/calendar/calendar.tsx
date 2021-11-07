import FullCalendar, {CalendarApi, DateSelectArg, DateSpanApi, EventClickArg} from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import {useState} from "react";
import {sub, add} from 'date-fns';
import EventForm from "./event-form";

function createEventId() {
    return Math.floor(Math.random() * 1000);
}

interface CalendarProps {
    weekendVisible: boolean;
}

const Calendar = (props: CalendarProps) => {
    const {weekendVisible} = props;
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<DateSpanApi | undefined>();
    const [calendar, setCalendar] = useState<CalendarApi | undefined>();
    const handleClose = () => {
        setOpen(false);
    }

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        setSelected(selectInfo);
        setOpen(true);
        const calendarApi = selectInfo.view.calendar;
        setCalendar(calendarApi);
        calendarApi.unselect() // clear date selection
    };

    const handleEventClick = (eventInfo: EventClickArg) => {
        const e = eventInfo.event;
        setSelected({
            start: e.start!,
            end: e.end!,
            allDay: false,
            startStr: '',
            endStr: '',
        });
        setOpen(true);
        const calendarAPi = eventInfo.view.calendar;
        setCalendar(calendarAPi)
        calendarAPi.unselect();
    }

    return (
        <>
            <EventForm open={open} onClose={handleClose} event={selected} calendar={calendar}/>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                validRange={{
                    start: sub(new Date(), {months: 1}),
                    end: add(new Date(), {months: 1})
                }}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'timeGridWeek,dayGridMonth'
                }}
                editable={true}
                selectable={true}
                selectAllow={(span) => !span.allDay}
                select={handleDateSelect}
                eventClick={handleEventClick}
                weekends={weekendVisible}
                allDaySlot={false}
                nowIndicator={true}
                slotDuration='00:10:00'
            />
        </>
    );
}


export default Calendar;