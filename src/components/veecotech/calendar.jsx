import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { availability } from "src/data/availability";


const mapAvailabilityToEvents = (availability) => {
  return availability.map((item) => {
    return {
      title: item.title,
      start: `${item.date}T${item.startTime}:00`, // ISO 8601 format
      end: `${item.date}T${item.endTime}:00`,
      allDay: false,  // Set to false since it's not an all-day event
      extendedProps: {
        details: item.details, // Add details to extendedProps
      },
    };
  });
};

function AvailabilityCalendar() {

  const handleEventClick = (clickInfo) => {
    const { title, start, end, extendedProps  } = clickInfo.event;

    // Format start and end times to 24-hour format
    const startFormatted = start.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const endFormatted = end.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    window.alert(`Event: ${title}\nStart: ${startFormatted}\nEnd: ${endFormatted}\nDetails: ${extendedProps.details ?? "-"}`);
  };

  return (
    <Fullcalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start: "today prev,next", 
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", 
      }}
      events={mapAvailabilityToEvents(availability)} // Pass events to FullCalendar
      eventClick={handleEventClick}
    />
  );
}

export default AvailabilityCalendar;