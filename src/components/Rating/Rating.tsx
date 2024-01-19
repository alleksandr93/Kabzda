import React from "react";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type TypePropsStar = {
    selected: boolean
}

export function Rating(props: RatingProps) {
    console.log("Rating redered")
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>
    )
}

function Star(props: TypePropsStar) {

    console.log('Star rendered')
    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }


}