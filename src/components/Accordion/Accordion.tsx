import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange:()=>void
}


export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title} onClick={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>


}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
type AccordionTitleProps = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitleProps) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={(event)=>props.onClick()}>{props.title}</h3>
}