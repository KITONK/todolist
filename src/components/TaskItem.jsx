import React from 'react';
import RadioButton from './radio_button/RadioButton';

const TaskItem = (props) => {
    return (
        <div className="task">
            <RadioButton/>
            <strong style={{margin: '10px', display: 'inline-block'}}>{props.task.title}</strong>
        </div>
    );
};

export default TaskItem;