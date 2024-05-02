import React, {useState} from 'react';

type UnControlledAccordionPropsType = {
    title: string

}
type UncControlledAccordionTitleProps = {
    title: string
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)
    const changeClickState = () => {
        setCollapsed(!collapsed)
    }
    return <div>
        <AccordionTitle title={props.title}/> <button onClick={changeClickState}>TOGGLE</button>
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
    console.log('AccordionTitle rendering')
    return <h3 >{props.title}</h3>
}