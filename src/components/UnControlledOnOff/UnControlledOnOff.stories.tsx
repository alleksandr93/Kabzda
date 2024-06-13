import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from './UnControlledOnOff';
import {OnOff} from '../OnOff/OnOff';


export default {
    title: 'UnControlledOnOff',
    component: UncontrolledOnOff
}
export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action('clicked')}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action('clicked')}/>
export const ModeChanging = () => {
    return <UncontrolledOnOff onChange={x=>x}/>
}