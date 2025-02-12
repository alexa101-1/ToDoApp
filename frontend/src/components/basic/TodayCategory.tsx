import React, {useEffect, useState} from "react";
import classes from "./TodayCategory.module.css";

interface CategoryItem {
    category: string; // The category name, e.g., "Work", "Sports", "Fun"
    items: string[];  // Array of strings representing the items
}

interface TodayCategoryProps {
    title: string;
    items: CategoryItem[];
}

const TodayCategory: React.FC<TodayCategoryProps> = ({title, items}) => {
    const [filteredItems, setFilteredItems] = useState<CategoryItem[]>([]);
    useEffect(() => {
        if(items){
            const filtered:CategoryItem[] = items.filter((item) => item.category === title);
            setFilteredItems(filtered)
        }
    }, [items, title]);


    return(
        <div className={classes.categoryContainer}>
            <h4 className={classes.title}>{title}</h4>
            <ul>
                {filteredItems.map((category) => (
                    category.items.map((item, itemIndex) => (
                        <li className={classes.item} key={itemIndex}>
                            {item}
                        </li>
                    ))
                ))}
            </ul>
        </div>
    )
}

export default TodayCategory;

