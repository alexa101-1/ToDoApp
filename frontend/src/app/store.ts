import {configureStore} from "@reduxjs/toolkit";
import todayDataSlice from "../features/data/todayDataSlice.ts";
import eventsSlice from "../features/data/eventsSlice.ts";
import mySpaceSlice from "../features/data/mySpaceSlice.ts";

export const store  = configureStore({
    reducer: {
        todayData: todayDataSlice,
        events: eventsSlice,
        mySpace: mySpaceSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;