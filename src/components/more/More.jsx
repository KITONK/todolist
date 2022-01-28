import React from 'react';
import classes from './More.module.css';

const More = () => {
    return (
        <div className={classes.myMore}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
        </div>
    );
};

export default More;