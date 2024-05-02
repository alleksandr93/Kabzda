import React, {useState} from 'react';

type UncontrolledRatingProps = 0 | 1 | 2 | 3 | 4 | 5
type TypePropsStar = {
    select: boolean
}

export function UncontrolledRating() {
    console.log('Rating redered')
    const [select, setSelect] = useState<UncontrolledRatingProps>(0)
const changeSelect=(count:UncontrolledRatingProps)=>{
        setSelect(count)
}
    return (
        <div>
            <Star select={select > 0}/>
            <button onClick={()=>changeSelect(1)}>1</button>
            <Star select={select > 1}/>
            <button onClick={()=>changeSelect(2)}>2</button>
            <Star select={select > 2}/>
            <button onClick={()=>changeSelect(3)}>3</button>
            <Star select={select > 3}/>
            <button onClick={()=>changeSelect(4)}>4</button>
            <Star select={select > 4}/>
            <button onClick={()=>changeSelect(5)}>5</button>

        </div>
    )
}

function Star(props: TypePropsStar) {

    console.log('Star rendered')
    if (props.select) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }


}