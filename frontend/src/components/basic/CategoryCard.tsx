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
                            <span>{item}</span>
                                <div className={classes.buttons}><button><FontAwesomeIcon icon={faTrash} /></button>
                                    <button><FontAwesomeIcon icon={faCircleCheck} /></button></div>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryCard;

