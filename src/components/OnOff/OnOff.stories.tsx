import {action} from '@storybook/addon-actions'
import {OnOff} from './OnOff';
import {useState} from 'react';

export default {
    title: 'On-Off',
    component: OnOff
}
export const OnMode = () => <OnOff on={true} onChange={action('clicked')}/>
export const OffMode = () => <OnOff on={false} onChange={action('clicked')}/>
export const ModeChanging = () => {
    const [onOff, setOnOff] = useState<boolean>(false)
    return <OnOff on={onOff} onChange={() => setOnOff(!onOff)}/>
}