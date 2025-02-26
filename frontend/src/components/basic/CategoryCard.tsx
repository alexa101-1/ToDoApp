import classes from "./CategoryCard.module.css";
import {CategoryItem} from "../../types";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CategoryCard: React.FC<CategoryItem> = ({category, items}) => {
    return(
        <div className={classes.categoryContainer}>
            <h4 className={classes.title}>{category}</h4>
            <ul className={classes.itemsList}>
                {items.map((item:string, index:number) => (
                        <li className={classes.item} key={index}>
                            <div>
                                <span className={classes.itemName}>{item}</span>
                                <button className={classes.trash}><FontAwesomeIcon icon={faTrash} /></button>
                                <button className={classes.check}><FontAwesomeIcon icon={faCircleCheck} /></button>
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryCard;

