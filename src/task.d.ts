export type TaskData={
    title:string;
    body:string;
    tags:Tag[]
}
export type Tag ={
    id:string;
    label:string;
}
export type Tasks={
    id:string
} & TaskData

export type RawTask={
    id:string;
    } & RawTaskData

    
 export type RawTaskData={
      title:string;
      body:string;
      tagIds:string[];
    }