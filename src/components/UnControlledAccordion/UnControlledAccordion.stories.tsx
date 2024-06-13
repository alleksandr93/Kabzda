import {action} from '@storybook/addon-actions'
import {UnControlledAccordion} from './UnControlledAccordion';

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
}

export const ModeChanging = () => {
    return <UnControlledAccordion title={'Users'}/>
}