import React, {useState} from 'react';
import Icon from './icon/Icon';
import alarm from '../images/alarm.png';
import TaskItem from './TaskItem';
import More from './more/More';

const ListInfo = (props) => {

    const [tasksToday, setTaskToday] = useState([
        {title: 'Update About PageHeader'},
    ])

    const [tasksInProcess, setTask] = useState([
        {title: 'About Page Wordings'},
        {title: 'New landing page layot'},
    ])

    const [tasksBacklog, setTaskBacklog] = useState([
        {title: 'About Page Wordings'},
        {title: 'New landing page layot'},
    ])

    return (
        <div>
            <div>
                <div className="header-rightSideBar">
                <div>
                    <h1>{props.list.title}</h1>
                    <p style={{color: "grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, aliquam.</p>
                </div>
                <div>
                    <img src={alarm} width="18" height="18" style={{color: 'lightgrey'}}/>
                    <More/>
                </div>
                </div>
                <div>
                    <b style={{color: "grey"}}>Today</b>
                    {tasksToday.map((task) => 
                        <TaskItem task={task}/>
                    )}
                </div>
                <div style={{marginTop: '40px'}}>
                    <b style={{color: "grey"}}>Work In Progress</b>
                    {tasksInProcess.map((task) => 
                        <TaskItem task={task}/>
                    )}
                </div>
                <div style={{marginTop: '40px'}}>
                    <b style={{color: "grey"}}>Backlog</b>
                    {tasksBacklog.map((task) => 
                        <TaskItem task={task}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListInfo;