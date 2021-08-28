import FullCalendar, { DateSelectArg } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import { useState } from "react";
import { sub, add } from 'date-fns';
import EventForm from "./event-form";

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
      <EventForm open={open} onClose={handleClose} event={selected} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
        initialView="timeGridWeek"
        validRange={{
          start: sub(new Date(), { months: 1 }),
          end: add(new Date(), { months: 1 })
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
        weekends={weekendVisible}
        allDaySlot={false}
        nowIndicator={true}
        slotDuration='00:10:00'
      />
    </>
  );
}



export default Calendar;