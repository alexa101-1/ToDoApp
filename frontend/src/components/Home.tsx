import classes from './Home.module.css'
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {UpcomingEvent, ReadingListItem} from "../types/mySpace.ts";
import {
    fetchReadingListItems, fetchUpcomingEvents,
    SelectReadingListItems, SelectReadingListItemsStatus,
    SelectUpcomingEvents,
    SelectUpcomingEventsStatus
} from "../features/data/mySpaceSlice.ts";


const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const upcomingEvents = useAppSelector(SelectUpcomingEvents)
    const readingListItems = useAppSelector(SelectReadingListItems)
    const upcomingEventsStatus = useAppSelector(SelectUpcomingEventsStatus)
    const readingListItemsStatus = useAppSelector(SelectReadingListItemsStatus)

    useEffect(() => {
        if(readingListItemsStatus === 'idle') {
            dispatch(fetchReadingListItems())
        }
        if(upcomingEventsStatus === 'idle'){
            dispatch(fetchUpcomingEvents())
        }

        console.log(readingListItems, upcomingEvents)

    }, [dispatch, readingListItemsStatus, upcomingEventsStatus, readingListItems, upcomingEvents]);


    return (
        <div>
            <div className={classes.myspaceCard}>
                <div className={classes.news}></div>
                <div className={classes.upcomingEvents}>
                    <ul>
                        {upcomingEvents.map((item: UpcomingEvent) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
                <div className={classes.readingList}>
                    <ul>
                        {readingListItems.map((item:ReadingListItem) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
