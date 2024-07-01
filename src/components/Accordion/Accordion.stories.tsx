import {action} from '@storybook/addon-actions'
import {useState} from 'react';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
}
const onClickCallBack= action('some item was clicked')
export const MenuCollapsedMode =()=><Accordion title={'Menu'} collapsed={true} onChange={action('clicked')} items={[]} onClick={onClickCallBack}/>
export const UsersUnCollapsedMode =()=><Accordion title={'Users'} collapsed={false} onChange={action('clicked')} items={[{title:'Dimych',value:1},{title:'Valera',value:2},{title:'Artem',value:3},{title:'Viktor',value:4}]} onClick={onClickCallBack}/>
export const ModeChanging =()=> {
    const [value,setValue]=useState<boolean>(true)
    return <Accordion title={'Users'} collapsed={value} onChange={()=>setValue(!value)} items={[{title:'Dimych',value:1},{title:'Valera',value:2},{title:'Artem',value:3},{title:'Viktor',value:4}]} onClick={(id)=>alert(id)}/>
}