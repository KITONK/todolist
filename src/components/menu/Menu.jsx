import React from 'react';
import classes from './Menu.module.css';

const Menu  = () => {

    const ToggleMenu = (x) => {
        x.classList.toggle("change");
    }

    return (
        <div className={classes.myMenu} onClick={ToggleMenu}>
            <div className={classes.myBar1}></div>
            <div className={classes.myBar2}></div>
            <div className={classes.myBar3}></div>
        </div>
    );
};

export default Menu;