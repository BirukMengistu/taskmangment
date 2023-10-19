
import React ,{FC, ReactElement, ReactNode, ReactPortal, useRef} from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ImportantTypes=[
    ReactNode,
    ReactElement,
    ReactPortal,
    JSX.Element
];
 


export const Component :FC< {
    title:JSX.Element
}> =()=> {
    //const ref = useRef<string>(null)
    const ref =useRef<HTMLDivElement>(null)
    return <div ref={ref} />
    //Cannot assign to 'current' because it is a read-only property.
   // const ref =useRef<HTMLDivElement>()
   //return <div ref={ref} />
    //if ref-> The expected type comes from property 'ref' which is declared here on type
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Parent = ()=>{
    return(
        <Component title={<span>Hello!</span>}>
           
        </Component>
    )
}

export const Div =():JSX.Element=>{
    const obj: JSX.Element={
        type:'div',
        key:'null',
        props:{}
    }
    return obj
}
const buttonProps = {
    type:'button',
    /* 
    type const = {
    readonly type: "button";
      } */

} as const;


//buttonProps.type='submit'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const divParent = ()=>{
    return(
         <Div>
            
         </Div>
    )
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewComponenet =()=>{
    <div>
         <button  {...buttonProps}>
               click me!
           </button>
    </div>
}







