import React from 'react'
import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [title, settitle] = useState()
    const [time, settime] = useState()
    const [reminder, setreminder] = useState(false)
function onSubmit(e){
    e.preventDefault();
    if(!title){
        alert('please add task')
        return
    }
    
        onAdd({title,time,reminder})
    
    settitle('');
    settime('');
    setreminder(false);
}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={title}
                onChange={(event)=>settitle(event.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type="text" placeholder="Day & Time"
                 value={time}
                 onChange={(event)=>settime(event.target.value)}
                />
            </div>
            
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox"
                checked={reminder}
                 value={reminder}
                 onChange={(event)=>setreminder(event.currentTarget.checked)}  />
            </div>

            <input type="submit" value="Save Task" className='btn btn-block'/>
            
            
        </form>
    )
}

export default AddTask
