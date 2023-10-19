import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Route, Routes,Navigate } from 'react-router-dom'
import Newtask from './components/Newtask'
import { TaskData,Tag, Tasks, RawTask } from './task'
import { useMemo, useState  } from 'react'
import { useLocalStorage } from './components/useLocalStorage'
import {v4 as uuidV4} from 'uuid'
import Home from './Home'
import TaskLayout from './components/TaskLayout'
import Task from './components/Task'
import Edittask from './components/EditTask'

function App() {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] =useLocalStorage<RawTask[]>('task',[])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tags, setTags] =useLocalStorage<Tag[]>('tags',[])
 
 const TasksWithTag = useMemo(()=>{
  return tasks.map(task =>{
    return{ ...task, tags: tags.filter(tag => task.tagIds.includes(tag.id))}
  })
 }, [tasks,tags])
 
 function onDeleteTask(id: string)
 {
  setTasks(prevTask => {
    return prevTask .filter(task => task.id !== id)
  })
 }
 function onCreateTask({tags , ...data}:TaskData){
  setTasks(prevTasks => {
    return [...prevTasks ,
           {...data, id: uuidV4(), tagIds: tags.map(tag =>tag.id)}]
  })
 }
function onUpdateTask(id:string,{tags , ...data}:TaskData){
  setTasks( prevTasks => {
    return prevTasks.map(task => {
      if(task.id === id)
      {
        return {...task,...data, tagIds: tags.map(tag =>tag.id)}
      }
      else
      {
        return task
      }
    })
    
   })
  }
 function onAddTag(tag:Tag){
  setTags(prev=> [...prev, tag])
 }

 function updateTag(id: string, label: string) {
  setTags(prevTags => {
    return prevTags.map(tag => {
      if (tag.id === id) {
        return { ...tag, label }
      } else {
        return tag
      }
    })
  })
}

function deleteTag(id: string) {
  setTags(prevTags => {
    return prevTags.filter(tag => tag.id !== id)
  })
}
  return (
    <Container className='my-4 '>
       <Routes>
       <Route path='/' element={<Home  avaliableTags={tags} tasks={TasksWithTag}
        onDeleteTag={deleteTag}
        onUpdateTag={updateTag}/>}/>
       <Route path='/*' element={ <Navigate to='/'/> }/>
       <Route path='/:id' element={ <TaskLayout tasks={TasksWithTag}  />} >
         <Route index element={<Task onDeletTask={onDeleteTask} />}/>
         <Route path='edit' element={<Edittask onSubmit={onUpdateTask} 
       onAddTag={onAddTag}  avaliableTags={tags}/>}/>
       </Route>
       <Route path='/new' element={<Newtask onSubmit={onCreateTask} 
       onAddTag={onAddTag} avaliableTags={tags}/>}/>
    </Routes>
    </Container>
   
  )
}

export default App
