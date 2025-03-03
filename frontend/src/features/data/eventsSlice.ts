import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
interface Event {
    title: string,
    start: Date,
    end: Date
}

interface EventsState {
    entities: Event[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}

const initialState: EventsState = {
    entities: [],
    status: 'idle',
    error: null
}

const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchEvents = createAsyncThunk('data/fetchEvents', async (_, {rejectWithValue}) => {
    try{
        const response = await fetch(`${baseURL}/monthly`)

        if(!response.ok){
            throw new Error('Server Error!')
        }

        const data = await response.json()
        return data.map((event: Event) => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end)
        }));
    }catch (error: unknown) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('An unknown error occurred');
    }
})

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEvents.fulfilled, (state, action:PayloadAction<Event[]>) => {
                state.status = 'succeeded';
                state.entities = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'Unknown error occurred';
            });
    }
});
export const SelectEvents = (state:RootState) => state.events.entities;
export const SelectEventsStatus = (state:RootState) => state.events.status;
export const SelectEventsError = (state: RootState) => state.events.error
export default eventsSlice.reducer;