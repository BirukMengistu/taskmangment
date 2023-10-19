type VariantA={
    color: 'red'| 'green'| 'blue'
}

type VariantB={
    color: 'yellow'| 'orange'
}

type Props<Variant>=
 Variant extends VariantB? VariantB:VariantA;
 
 interface VariantComp<Variant> extends 
   React.FC<Props<Variant>>{
    VariantA:VariantComp<VariantA>,
    VariantB:VariantComp<VariantB>
   }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TestComp:React.FC<Props<VariantA>>=()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const Button: VariantComp<unknown> = function(prop){
     
    }

    Button.VariantA=Button
    Button.VariantB=Button
    return <>
     <Button.VariantA color='red' />
     <Button.VariantB color='yellow' />
    </>
}
