import {Link, useLocation} from 'react-router-dom';
import classes from "./Navbar.module.css";
import React from "react";
import HomeButton from "./buttons/HomeButton.tsx";

interface NavbarProps {
    links: string[];
}

const Navbar:React.FC<NavbarProps> = ({links}) => {
    const location = useLocation()
    const specials: string[] = [`Marco's birthday`, 'Uni Reunion'];

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className={classes.header}>
        <nav className="navbar">
            <div className={classes.navbarContainer}>
                <HomeButton/>
                <ul className={classes.navbarList}>
                    {links.map((link, index) => (
                        <li className={classes.navbarItem} key={index}>
                            <Link to={`/${link}`} className={`${classes.navLink} ${isActive(`/${link}`)}`}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        <div className={classes.specialCorner}>
            {/*<p>My Special Corner</p>*/}
            <ul className={classes.specialList}>
                {specials.map((special, index) => (
                    <li key={index}>{special}</li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Navbar;
