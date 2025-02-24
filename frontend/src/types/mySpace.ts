export interface UpcomingEvent {
    id: number;
    title: string;
    date: string;  // Format: YYYY-MM-DD
    time: string;  // Format: HH:MM AM/PM
    location: string;
    description: string;
}


export interface ReadingListItem {
    id: number;
    title: string;
    author: string;
    link: string;
    summary: string;
}