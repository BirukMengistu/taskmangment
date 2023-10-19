import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Tasks } from "../task"

type  TaskLayoutProps={
    tasks:Tasks[]
}
export default function TaskLayout({ tasks}:TaskLayoutProps) {
   const {id} = useParams()
  
   const task = tasks.find(data => data.id === id)
   if(tasks === null) return <Navigate to ='/' replace/>
    return <Outlet context={task}/>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTask(){
    return useOutletContext<Tasks>()
}