import React from 'react';
import Input from './input/Input';

const ListFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                style={{display: 'block',  marginLeft: 'auto', marginRight: 'auto'}}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />
        </div>
    );
};

export default ListFilter;