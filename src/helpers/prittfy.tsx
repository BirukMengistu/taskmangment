interface baseInfo{
    name?:string;
    id:string;
    task:string;
}

interface addditionalInfo extends baseInfo {
    active:boolean;
}

interface someInfo extends addditionalInfo{
    group?:string;
    group_id:number;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const member: Prettify<someInfo>={
    id:'scf001',
    task:'backlog-1',
    active:false,
    group_id:33

}

type Prettify<T>={
    [K in keyof T]:T[K]; 
    
} &unknown;