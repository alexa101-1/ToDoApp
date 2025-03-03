import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import classes from "./HomeButton.module.css"
import {useNavigate} from "react-router-dom";

const HomeButton: React.FC = () => {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/');
    }

    return <div onClick={navigateHome} className={classes.button}><FontAwesomeIcon icon={faHouse} /></div>

}

export default HomeButton;