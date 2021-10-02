import React from 'react'
import { MdDelete } from 'react-icons/md'

const Task = ({task,onDelete,toggleReminder}) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>toggleReminder(task.id)}>
            <h3>{task.title} <MdDelete style={{color:'red',cursor:'pointer'}}onClick={()=>onDelete(task.id)} /></h3>
            <p>{task.time}</p>
        </div>
    )
    
}

export default Task
