import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import Button from './button/Button';
import ListItem from './ListItem';

const ListList = ({lists, remove}) => {
    if(!lists.length) {
        return (
            <h3 style={{textAlign: 'center'}}>
                Add new list
            </h3>
        )
    }

    return (
        <div>
            <TransitionGroup>
                {lists.map((list, index) =>
                    <CSSTransition
                        key = {list.id}
                        timeout={500}
                        classNames="leftSideBar"
                    >
                    <ListItem remove={remove} number={index+1} list={list}/>
                </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default ListList;