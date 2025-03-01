
import React, { useEffect } from "react";
import classes from "./Today.module.css";
import CategoryCard from "./basic/CategoryCard.tsx";
import {useAppSelector, useAppDispatch} from "../app/hooks.ts";
import {
    selectTodayData,
    selectTodayDataStatus,
    selectTodayDataError,
    fetchTodayData
} from "../features/data/todayDataSlice.ts";

interface CategoryItem {
    category: string; // The category name, e.g., "Work", "Sports", "Fun"
    items: string[];  // Array of strings representing the items
}

const Today: React.FC = () => {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectTodayData)
    const error = useAppSelector(selectTodayDataError)
    const status = useAppSelector(selectTodayDataStatus)

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchTodayData())
        }
    }, [status, dispatch]);

    if(status === 'loading'){
        return <div>Loading...</div>
    }
    if(status === 'failed'){
        return <div>Error: {error}</div>
    }


    return (
        <div className={classes.dailyPageContainer}>
            <ul className={classes.dailyContainer}>
                {items.map((item: CategoryItem, index: number) => (
                    <li key={index}> <CategoryCard  category={item.category} items={item.items}/> </li>
                ))}
            </ul>

        </div>
    )
}

export default Today;