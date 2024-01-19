import React from "react";

type AccordionProps = {
    title: string
    collapsed: boolean
}
type AccordionTitleProps ={
    title: string
}

export function Accordion(props: AccordionProps) {
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.title}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    }


}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

function AccordionTitle(props: AccordionTitleProps) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}