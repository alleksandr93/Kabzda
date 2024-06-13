import {action} from '@storybook/addon-actions'
import {useState} from 'react';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
}
export const CollapsedMode =()=><Accordion title={'Menu'} collapsed={true} onChange={action('clicked')}/>
export const UsersUnCollapsedMode =()=><Accordion title={'Users'} collapsed={false} onChange={action('clicked')}/>
export const ModeChanging =()=> {
    const [value,setValue]=useState<boolean>(true)
    return <Accordion title={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
}