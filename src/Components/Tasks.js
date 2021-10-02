import React from 'react'
import Task from '../Task'


const Tasks = ({task,onDelete,toggleReminder}) => {
    return (

        <div>
            {task.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder}/>
            ))}
            
            
        </div>
    )
}

export default Tasks
