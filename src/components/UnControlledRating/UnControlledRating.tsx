import React, {useState} from 'react';

type UncontrolledRatingProps = 0 | 1 | 2 | 3 | 4 | 5
type TypePropsStar = {
    value: boolean
    number: UncontrolledRatingProps
    changeSelect: (count: UncontrolledRatingProps) => void
}

export function UncontrolledRating() {
    console.log('Rating redered')
    const [value, setvalue] = useState<UncontrolledRatingProps>(0)
    const changeSelect = (count: UncontrolledRatingProps) => {
        setvalue(count)
    }

    return (
        <div className={'stars'}>
            <Star value={value > 0} number={1} changeSelect={changeSelect}/>
            <Star value={value > 1} number={2} changeSelect={changeSelect}/>
            <Star value={value > 2} number={3} changeSelect={changeSelect}/>
            <Star value={value > 3} number={4} changeSelect={changeSelect}/>
            <Star value={value > 4} number={5} changeSelect={changeSelect}/>
        </div>
    )
}

function Star(props: TypePropsStar) {
    const onClickHeader = () => {
        props.changeSelect(props.number)
    }
    console.log('Star rendered')
        return <>
            {props.value && <span onClick={onClickHeader}><b>Star </b></span>}
            {!props.value&&<span onClick={onClickHeader}>Star </span>}
        </>



}