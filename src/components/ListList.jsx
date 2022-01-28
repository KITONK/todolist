import React from 'react';
import ListItem from './ListItem';

const ListList = ({lists, remove}) => {
    return (
        <div>
            {lists.map((list, index) =>
              <ListItem remove={remove} number={index+1} list={list}/>
            )}
        </div>
    );
};

export default ListList;