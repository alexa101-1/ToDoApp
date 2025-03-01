import {configureStore} from "@reduxjs/toolkit";
import todayDataSlice from "../features/data/todayDataSlice.ts";
import eventsSlice from "../features/data/eventsSlice.ts";

export const store  = configureStore({
    reducer: {
        todayData: todayDataSlice,
        events: eventsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;