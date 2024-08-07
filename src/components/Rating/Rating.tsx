import React from 'react';


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type RatingProps = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
    defaultValue?:RatingValueType

}
export function Rating(props: RatingProps) {
    console.log('Rating redered')
    return (
        <div>
            <Star selected={props.value > 0}  onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1}  onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2}  onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3}  onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4}  onClick={props.onClick} value={5}/>

        </div>
    )
}

type TypePropsStar = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: TypePropsStar) {
    console.log('Star rendered')
    return <span onClick={()=>props.onClick(props.value)}>
        {props.selected ? <b>Star </b> : 'Star '}
    </span>
}