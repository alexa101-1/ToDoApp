import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";

interface CategoryItem {
    category: string; // The category name, e.g., "Work", "Sports", "Fun"
    items: string[];  // Array of strings representing the items
}

interface CategoryItemState {
    entities: CategoryItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CategoryItemState  = {
    entities: [],
    status: 'idle',
    error: null
}

const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchTodayData = createAsyncThunk('data/fetchTodayData',
    async(_, {rejectWithValue}) => {
        try{
            const response = await fetch(`${baseURL}/today`)
            if (!response.ok){
                throw new Error('Server error!')
            }
            const data: CategoryItem[] = await response.json()
            return data;
        }catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('An unknown error occurred');
        }
    })

const todayDataSlice = createSlice({
    name: 'todayData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodayData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodayData.fulfilled, (state, action: PayloadAction<CategoryItem[]>) => {
                state.status = 'succeeded'
                state.entities = action.payload
            })
            .addCase(fetchTodayData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string || 'Unknown error occurred !'
            })
    }
})

export const selectTodayData = (state:RootState) => state.todayData.entities
export const selectTodayDataStatus = (state:RootState) => state.todayData.status
export const selectTodayDataError = (state:RootState) => state.todayData.error

export default todayDataSlice.reducer;
