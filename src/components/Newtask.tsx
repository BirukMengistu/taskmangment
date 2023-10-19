// eslint-disable-next-line @typescript-eslint/no-unused-vars

import TaskForm from './TaskForm'
import { Tag, TaskData } from '../task'

type NewTaskProps={
    onSubmit:(data:TaskData)=>void
    onAddTag:(tag:Tag)=>void
    avaliableTags:Tag[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const  Newtask =({onSubmit , onAddTag ,avaliableTags}:NewTaskProps) => {
  return (
     <div className='mb-4'>
      <TaskForm onSubmit={onSubmit} onAddTag={onAddTag} avaliableTags={avaliableTags}/>
    </div>
  )
}
export default Newtask