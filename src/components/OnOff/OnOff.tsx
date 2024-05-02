import {useState} from 'react';


export const OnOff = () => {
    const [on, setOn] = useState(true)
    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClickHeader = (status: string) => {
        status === 'On' ? setOn(true) : setOn(false)
    }
    return <div>
        <div onClick={() => onClickHeader('On')} style={onStyle}>On</div>
        <div onClick={() => onClickHeader('Off')} style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>
    </div>

}