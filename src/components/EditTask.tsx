// eslint-disable-next-line @typescript-eslint/no-unused-vars

import TaskForm from './TaskForm'
import { Tag, TaskData } from '../task'
import { useTask } from './TaskLayout'

type EditTaskProps={
    onSubmit:(id:string,data:TaskData)=>void
    onAddTag:(tag:Tag)=>void
    avaliableTags:Tag[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const  Edittask =({onSubmit , onAddTag ,avaliableTags}:EditTaskProps) => {
    const task = useTask()
    
  return (
     <div className='mb-4'>
      <TaskForm
      title={task.title}
      body={task.body}
      tags={task.tags}
      onSubmit={data=> onSubmit(task.id ,data)} onAddTag={onAddTag} avaliableTags={avaliableTags}/>
    </div>
  )
}
export default Edittask