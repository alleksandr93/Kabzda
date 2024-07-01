import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;
import {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'input',

}
export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange=(e:ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={onChange}/>--{value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)

    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        actual value:{value}</>
}
export const ControlledInput=()=>{
    const [parentValue,setParentValue]=useState('')
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }

return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckbox=()=>{
    const [parentValue,setParentValue]=useState(true)
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect=()=>{
    const [parentValue,setParentValue]=useState<string|undefined>(undefined)
    const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option value={'0'}>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Tbilisi</option>
    </select>
}
export const ControlledInputWithFixedValue = () => <input value={'IT_INCUBATOR.BY'}/>