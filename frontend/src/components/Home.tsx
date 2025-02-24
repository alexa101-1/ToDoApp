import classes from './Home.module.css'
import {useEffect, useState} from "react";
import {UpcomingEvent} from "../types/mySpace.ts";
import {ReadingListItem} from "../types/mySpace.ts";


const Home: React.FC = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([])
    const [reatingListItems, setReadingListItems] = useState<ReadingListItem[]>([])

    useEffect(() => {
        fetch(`${baseURL}/myspace`)
            .then(res => res.json())
            .then(data => {
                setUpcomingEvents(data.upcomingEvents)
                setReadingListItems(data.readingList)
            })
            .catch(error => console.log('Error fetching upcoming events', error))
    }, []);


    return (
        <div>
            <div className={classes.myspaceCard}>
                <div className={classes.news}></div>
                <div className={classes.upcomingEvents}>
                    <ul>
                        {upcomingEvents.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
                <div className={classes.readingList}>
                    <ul>
                        {reatingListItems.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
