import React from 'react';
import weather from '../images/weather.png';

const ListItem = (props) => {
    return (
        <div className = "list">
            <div className="list__image">
                <img src={weather} width="30" height="30" alt="picture" />
            </div>
            <div className="list__text">
                    <strong>{props.list.title}</strong>
                    <div>{props.list.body}</div>
            </div>
        </div>
    );
};

export default ListItem;