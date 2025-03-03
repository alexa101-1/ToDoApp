
import {RootState} from '../../app/store.ts'
import {UpcomingEvent} from "../../types/mySpace";
import {ReadingListItem} from "../../types/mySpace";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


interface MySpaceState {
    upcomingEvents: UpcomingEvent[],
    upcomingEventsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    upcomingEventsError: string | null;
    readingList: ReadingListItem[],
    readingListStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    readingListError: string | null;
}

const initialState: MySpaceState = {
    upcomingEvents: [],
    upcomingEventsStatus: 'idle',
    upcomingEventsError: null,
    readingList: [],
    readingListStatus: 'idle',
    readingListError: null,
}

const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchUpcomingEvents = createAsyncThunk('data/fetchUpcomingEvents', async(_, {rejectWithValue}) => {
    try{
        const response = await fetch(`${baseURL}/myspace`)
        if(!response.ok){
            throw new Error('Server Error!')
        }
    const data = await response.json();
        return data.upcomingEvents;
    }catch(error:unknown){
        if(error instanceof Error){
            return rejectWithValue(error.message)
        }
        return rejectWithValue('An unknown error occurred');
    }
})

export const fetchReadingListItems = createAsyncThunk('data/readingListItems', async(_, {rejectWithValue}) => {
    try{
        const response = await fetch(`${baseURL}/myspace`)
        if(!response.ok){
            throw new Error('Server Error!')
        }
        const data = await response.json();
        return data.readingList;
    }catch(error:unknown){
        if(error instanceof Error){
            return rejectWithValue(error.message)
        }
        return rejectWithValue('An unknown error occurred');
    }
})

const mySpaceSlice = createSlice({
    name: 'mySpace',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingEvents.pending, (state) => {
                state.upcomingEventsStatus = 'loading'
            })
            .addCase(fetchUpcomingEvents.fulfilled, (state, action:PayloadAction<UpcomingEvent[]>) => {
                state.upcomingEventsStatus = 'succeeded';
                state.upcomingEvents = action.payload;
            })
            .addCase(fetchUpcomingEvents.rejected, (state, action) => {
                state.upcomingEventsStatus = 'failed';
                state.upcomingEventsError = action.payload as string || 'Unknown Error occurred'
            })
            .addCase(fetchReadingListItems.pending, (state) => {
                state.readingListStatus = 'loading'
            })
            .addCase(fetchReadingListItems.fulfilled, (state, action: PayloadAction<ReadingListItem[]>) => {
                state.readingListStatus = 'succeeded'
                state.readingList = action.payload
            })
            .addCase(fetchReadingListItems.rejected, (state, action) =>{
                state.readingListStatus = 'failed'
                state.readingListError = action.payload as string || 'Unknown error occurred'
            })

    }
})


export const SelectUpcomingEvents = (state: RootState) => state.mySpace.upcomingEvents
export const SelectUpcomingEventsStatus = (state: RootState) => state.mySpace.upcomingEventsStatus;
export const SelectUpcomingEventsError = (state:RootState) => state.mySpace.upcomingEventsError
export const SelectReadingListItems = (state: RootState) => state.mySpace.readingList;
export const SelectReadingListItemsStatus = (state: RootState) => state.mySpace.readingListStatus;
export const SelectReadingListItemsError = (state:RootState) => state.mySpace.readingListError
export default mySpaceSlice.reducer;

