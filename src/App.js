import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import {useState , useEffect} from "react";
import AddTask from "./AddTask";
import Footer from "./Footer";
import {BrowserRouter as Router , Route} from 'react-router-dom'
import About from "./About";

function App() {
  const [ShowAddTask, setShowAddTask] = useState(false)
  // this useState is for render the objects
  const [state, setstate] = useState([]);
  useEffect(() => {
    const getTasks= async()=>{
      const tasksFromServer= await fetchTasks()
      setstate(tasksFromServer)
    }
    getTasks();
    
  }, [])
  const fetchTasks= async()=>{
    const res = await fetch ('http://localhost:5000/tasks')
    const data= await res.json()
    return data
  }
// adding the task
async function addTask(task){
const res = await fetch("http://localhost:5000/tasks",{
  method:"POST",
  headers:{
    'Content-type':'application/json'
  },
  body:JSON.stringify(task)

})
const data=await res.json()
setstate([...state,data])

// const id= Math.floor(Math.random()*10000)+1
// console.log({...task})
// const newTask={id,...task}
// setstate([...state,newTask ])
}
// deleting the task
async function deleteTask (id)
{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"DELETE"
  })
setstate(state.filter((task)=>task.id !== id))
}
// chnaging the color of the task
const fetchTask= async(id)=>{
  const res = await fetch (`http://localhost:5000/tasks/${id}`)
  const data= await res.json()
  return data
}


function toggleReminder(id){
// const taskToggle= await  fetchTask(id)
// const updTask={...taskToggle,reminder:!taskToggle.reminder}
// const res = await fetch(`http://localhost:5000/tasks/${id}`,{
//   method:"PUT",
//   headers:{
//     'Content-type':'application/json'
//   },
//   body:JSON.stringify(updTask),
// })

//   }


  setstate(state.map((task)=>
 (task.id === id) ? {...task, reminder:!task.reminder}:task

   ))

 }

  return (
    <Router>
      <div className="Container">
     <Header onShow={()=>setShowAddTask(!ShowAddTask)} showAdd={ShowAddTask}/>
    {ShowAddTask && <AddTask onAdd={addTask}/>} 
    <Route path="/" exact render={()=>(
      <>
       {state.length>0?(<Tasks task={state} onDelete={deleteTask} toggleReminder={toggleReminder}/>):("No tasks to show")  }
      </>
    )}
    />
    
  
     <Route path="/about" component={About}/>
     <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
