import React, {useState} from 'react';
import Button from './button/Button';
import Input from './input/Input';

const ListForm = ({create}) => {

    const [list, setList] = useState({title: '', body: ''})

    const addNewList = (e) => {
        e.preventDefault();
        const newList = {
            ...list, id: Date.now()
        }
        create(newList);
        setList({title: '', body: ''});
    }

    return (
        <form>
            <Input
                value={list.title}
                onChange={e => setList({...list, title: e.target.value})}
                placeholder="List name"
            />
            <Input
                value={list.body}
                onChange={e => setList({...list, body: e.target.value})}
                placeholder='Count tasks'
            />
            <Button onClick={addNewList}>Add list</Button>
        </form>
    );
};

export default ListForm;