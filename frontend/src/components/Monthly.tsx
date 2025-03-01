import React, { useEffect } from "react";
import { Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {SelectEvents, SelectEventsStatus, SelectEventsError, fetchEvents} from "../features/data/eventsSlice.ts";
import classes from './Monthly.module.css'
const localizer = momentLocalizer(moment);

const Monthly: React.FC = () => {
    const dispatch = useAppDispatch()
    const events = useAppSelector(SelectEvents)
    const status = useAppSelector(SelectEventsStatus)
    //const error = useAppSelector(SelectEventsError)


    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchEvents())
        }
    }, [status, dispatch]);

    return (
        <div className={classes.calendarContainer} style={{ height: "80vh" }}>
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
