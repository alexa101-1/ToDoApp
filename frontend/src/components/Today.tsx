
import React, { useEffect, useState } from "react";
import classes from "./Today.module.css";
import TodayCategory from "./basic/TodayCategory.tsx";

interface CategoryItem {
    category: string; // The category name, e.g., "Work", "Sports", "Fun"
    items: string[];  // Array of strings representing the items
}

const Today: React.FC = () => {

    const [items, setItems] = useState<CategoryItem[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/api/today").then(res => res.json()).then(data => setItems(data)).catch(err => console.log(`Error fetching today's events`, err));
    }, []);


    return (
        <div className={classes.dailyPageContainer}>
            <ul className={classes.dailyContainer}>
                {items.map((item, index) => (
                    <li key={index}> <TodayCategory title={item.category} items={items}  /> </li>
                ))}
            </ul>

        </div>
    )
}

export default Today;