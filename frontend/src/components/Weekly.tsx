// import CategoryCard from "./basic/CategoryCard.tsx";
// import {useEffect, useState} from "react";
// import {CategoryItem} from "../types";

const Weekly: React.FC = () => {

    return(
        <div>Still thinking about how to do it...</div>
    )
    // const baseURL = import.meta.env.VITE_BASE_URL;
    // const [items, setItems] = useState<CategoryItem[]>([])
    // useEffect(() => {
    //     fetch(`${baseURL}/weekly`).then(res => res.json()).then(data => {
    //         setItems(data)
    //     }).catch(err => console.log(`Error fetching today's events`, err));
    // }, []);
    //
    // return(
    //     <div>
    //         <ul>
    //             {items.map((item) => (
    //                 <li><CategoryCard title={item.category} items={items}/></li>
    //             ))}
    //         </ul>
    //
    //     </div>
    // )
}

export default Weekly;