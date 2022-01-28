import React from 'react';
import classes from './RadioButton.module.css';

const RadioButton = () => {
    return (
        <input type="radio" className={classes.myRadioButton}/>
    );
};

export default RadioButton;