import React from 'react';

type PropsOnOffType = {
    on: boolean
    setOn: (on: boolean) => void
}
export const OnOff:React.FC<PropsOnOffType> = ({on,setOn}) => {
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
    return <div className={'OnOff'}>
        <div onClick={() => onClickHeader('On')} style={onStyle}>On</div>
        <div onClick={() => onClickHeader('Off')} style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>
    </div>

}