interface FormValues{
    name:string;
    email:string;
    password:string;
    somethingelse:string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

/*Record<"name"|"email"|"password" | "somethingElse",{
    //type Record<K extends string | number | symbol, T> = { [P in K]: T; }
    initialValue:string,
        label:'string'
}>*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inputs: Record<keyof FormValues,{
    //type Record<K extends string | number | symbol, T> = { [P in K]: T; }
    //he keyof operator takes a type and returns a union of its keys.
    initialValue:string,
        label:'string'
}> = {
    name:{
        initialValue:'',
        label:'Name'
    },
    email:{
        initialValue:'',
        label:'email'
    },
    password:{
        initialValue:'',
        label:'password'
    },
    somethingelse:{
        initialValue:'',
        label:'somethingelse'
    }
}



