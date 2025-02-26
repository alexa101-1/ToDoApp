import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import classes from "./HomeButton.module.css"

const HomeButton: React.FC = () => {
    return <div className={classes.button}><FontAwesomeIcon icon={faHouse} /></div>

}

export default HomeButton;