import React from "react";
import classes from "./SelfAssignedLittleCard.module.css";

interface SelfAssignedLittleCardProps { title: string; }

const SelfAssignedLittleCard: React.FC<SelfAssignedLittleCardProps> = ({title}) => {

    return(
        <div className={classes.littleCardContainer}>
            <p>{title}</p>
        </div>
    )
}

export default SelfAssignedLittleCard;