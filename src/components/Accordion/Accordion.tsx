import React from 'react';
 type Itemtype={
     title:string
     value:any
 }
type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange:()=>void
    items:Itemtype[]
    onClick:(value:any)=>void
}


export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title} onClick={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>


}
type AccordionBodyType={
    items:Itemtype[]
    onClick:(value:any)=>void
}
function AccordionBody(props:AccordionBodyType) {
    console.log('AccordionBody rendering')
    return <ul>{props.items.map((el,index)=><li onClick={()=>props.onClick(el.value)} key={index}>{el.title}</li>)}</ul>
}
type AccordionTitleProps = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitleProps) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={(event)=>props.onClick()}>{props.title}</h3>
}