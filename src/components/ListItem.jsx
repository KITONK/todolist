import React from 'react';
import weather from '../images/weather.png';
import Icon from './icon/Icon';

const ListItem = (props) => {
    return (
            <div className = "list">
                <div className="list__image">
                    <Icon src={weather} alt="picture"/>
                </div>
                <div className="list__text">
                        <strong>{props.list.title}</strong>
                        <div>{props.list.body}</div>
                </div>
            </div>
    );
};

export default ListItem;