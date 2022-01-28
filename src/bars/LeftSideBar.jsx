import React, {useState} from 'react';
import weather from '../images/weather.png';
import Menu from '../components/menu/Menu';
import { useLists } from '../hooks/useLists';
import Modal from '../components/modal/Modal';
import Button from '../components/button/Button';
import ListList from '../components/ListList';
import ListForm from '../components/ListForm';
import ListFilter from '../components/ListFilter';
import Icon from '../components/icon/Icon';
import ListInfo from '../components/ListInfo';

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
          <div>
          <div className="split leftSideBar">
              <div className="header-leftSideBar">
                  <Menu/>
                  <Icon src={weather} alt="weather"/>
              </div>
              <ListFilter
                filter={filter}
                setFilter={setFilter}
              />
              <div className="body-leftSideBar">
                <ListList lists={searchLists} />
             </div>
             <div className="button-leftSideBar">
                <Button style={{display: 'block',  marginLeft: 'auto', marginRight: 'auto'}} onClick={()=>setModal(true)}>Add list</Button>
                <Modal
                  visible={modal}
                  setVisible={setModal}
                >
                  <ListForm create = {createList} />
                </Modal>
             </div>
             <div className="split rightSideBar">
                 <div className="rightSideBar__content">
                 {lists.map((list) => 
                    <ListInfo list={list}/>
                 )}
                 </div>
            </div>
          </div>
          </div>
      );
}

export default LeftSideBar;
