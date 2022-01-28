import React, {useState} from 'react';
import './App.css';
import weather from './images/weather.png';
import Menu from './components/menu/Menu';
import Input from './components/input/Input';
import Modal from './components/modal/Modal';
import Button from './components/button/Button';
import ListList from './components/ListList';
import ListForm from './components/ListForm';

function App() {

  const [lists, setLists] = useState([
    {title: 'Hello', body: 'World'},
    {title: 'Hello', body: 'World'},
    {title: 'Hello', body: 'World'},
  ])

  const [modal, setModal] = useState(false)

  const createList = (newList) => {
    setLists([...lists, newList])
    setModal(false)
  }

  const removeList = (list) => {
    setLists(lists.filter(l => l.id !== list.id))
  }


  return (
    <div className="App">
      <div className="split leftSideBar">
          <div className="header-leftSideBar">
              <Menu/>
              <img src={weather} width="30" height="30" alt="picture" />
          </div>
          <Input placeholder="Search..."/>
            <ListList remove={removeList} lists={lists}/>
            <div className="button-leftSideBar">
            <Button onClick={()=>setModal(true)}>Add list</Button>
            <Modal
              visible={modal}
              setVisible={setModal}
            >
              <ListForm create = {createList} />
            </Modal>
            </div>
      </div>
      <div className="split rightSideBar">
 
      </div>
    </div>
  );
}

export default App;
