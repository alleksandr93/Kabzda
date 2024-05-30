import React, {useState} from 'react';

type UnControlledAccordionPropsType = {
    title: string

}
type UncControlledAccordionTitleProps = {
    title: string
    onClick:()=>void
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.title} onClick={()=>setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}
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

function AccordionTitle(props: UncControlledAccordionTitleProps) {
    const onClickHeandler=()=>{
        props.onClick()
    }
    console.log('AccordionTitle rendering')
    return <h3 onClick={onClickHeandler}>{props.title}</h3>
}