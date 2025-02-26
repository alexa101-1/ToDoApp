
import React, { useEffect, useState } from "react";
import classes from "./Today.module.css";
import CategoryCard from "./basic/CategoryCard.tsx";

interface CategoryItem {
    category: string; // The category name, e.g., "Work", "Sports", "Fun"
    items: string[];  // Array of strings representing the items
}

const Today: React.FC = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const [items, setItems] = useState<CategoryItem[]>([])

    useEffect(() => {
        fetch(`${baseURL}/today`).then(res => res.json()).then(data => {
            setItems(data)
        }).catch(err => console.log(`Error fetching today's events`, err));
    }, []);


    return (
        <div className={classes.dailyPageContainer}>
            <ul className={classes.dailyContainer}>
                {items.map((item, index) => (
                    <li key={index}> <CategoryCard  category={item.category} items={item.items}/> </li>
                ))}
            </ul>

        </div>
    )
}

export default Today;