import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

interface Event {
    title: string,
    start: Date,
    end: Date
}

const localizer = momentLocalizer(moment);

const Monthly: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/api/monthly")
            .then((res) => res.json())
            .then((data) => {
                const formattedData = data.map((event:any) =>({
                    ...event,
                    start: new Date(event.start),
                    end: new Date(event.end)
                }))
                console.log(formattedData)
                setEvents(formattedData)
               })
            .catch((err) => console.error("Error fetching events:", err));

    }, []);

    return (
        <div style={{ height: "80vh", padding: "20px" }}>
            <h1>My Monthly Overview</h1>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                defaultDate={new Date("2024-02-16")}
                style={{ height: "100%" }}
                onSelectEvent={(event) => console.log('Selected event:', event)}
            />
        </div>
    );
};

export default Monthly;
