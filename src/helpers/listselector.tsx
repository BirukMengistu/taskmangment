const friuts = ['apple', 'banna',
   'mango','orange'] as const
 //string
type Props={
    selected : typeof friuts[number]  
   };

//type fruts_type = "apple" | "banna" | "mango" | "orange"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myComp:React.FC<Props> = ({ selected} )=>{
    return friuts.map((fruit)=>
    <Item  selected = {friuts.includes(fruit)}>
        {fruit}
    </Item>)
}

// eslint-disable-next-line react-refresh/only-export-components
const Item =(_props: Props)=>{
    return <>
      {_props}
    </>
}