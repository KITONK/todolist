import React, {useState} from 'react';
import weather from '../images/weather.png';
import Menu from '../components/menu/Menu';
import { useLists } from '../hooks/useLists';
import Modal from '../components/modal/Modal';
import Button from '../components/button/Button';
import ListList from '../components/ListList';
import ListForm from '../components/ListForm';
import ListFilter from '../components/ListFilter';

function LeftSideBar () {
    const [lists, setLists] = useState([
        {title: 'Hello', body: 'World'},
        {title: 'awsd', body: 'World'},
        {title: 'revee', body: 'World'},
      ])
    
      const [modal, setModal] = useState(false)
      const [filter, setFilter] = useState({query: ''})
      const searchLists = useLists(lists, filter.query)
    
      const createList = (newList) => {
        setLists([...lists, newList])
        setModal(false)
      }
    
      const removeList = (list) => {
        setLists(lists.filter(l => l.id !== list.id))
      }
    
    
      return (
          <div className="split leftSideBar">
              <div style={{borderRight: '1px solid #ff0000'}}>
              <div className="header-leftSideBar">
                  <Menu/>
                  <img src={weather} width="30" height="30" alt="picture" />
              </div>
              <ListFilter
                filter={filter}
                setFilter={setFilter}
              />
                <ListList remove={removeList} lists={searchLists} />
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
          </div>
      );
}

export default LeftSideBar;
