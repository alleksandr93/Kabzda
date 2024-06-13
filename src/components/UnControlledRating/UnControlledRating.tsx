import React, {useState} from 'react';

export type UncontrolledRatingProps = 0 | 1 | 2 | 3 | 4 | 5
type RatingProps = {
    defaultValue?: UncontrolledRatingProps
    onChange?: (value: UncontrolledRatingProps) => void
}

export function UncontrolledRating(props: RatingProps) {
    console.log('Rating redered')
    const [value, setValue] = useState<UncontrolledRatingProps>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div className={'stars'}>
            <Star selected={value > 0} setValue={() => {
                setValue(1);

            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2);

            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3);

            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4);

            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5);

            }}/>
        </div>
    )
}

type TypePropsStar = {
    selected: boolean
    setValue: () => void
}

function Star(props: TypePropsStar) {
    const onClickHeader = () => {
        props.setValue()
    }
    return <span onClick={onClickHeader}>
        {props.selected ? <b>star </b> : 'star '}
    </span>


}