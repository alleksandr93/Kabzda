import React, {useState} from 'react';

type UnControlledAccordionPropsType = {
    title: string

}
type UncControlledAccordionTitleProps = {
    title: string
    changeClickState:()=>void
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)
    const changeClickState = ( ) => {
        setCollapsed(!collapsed)
    }
    return <div>
        <AccordionTitle title={props.title} changeClickState={changeClickState}/>
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
        props.changeClickState()
    }
    console.log('AccordionTitle rendering')
    return <h3 onClick={onClickHeandler}>{props.title}</h3>
}