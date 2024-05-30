import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UnControlledRating/UnControlledRating';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';


type PageTitleProps = {
    title: string
}


function App() {
    console.log('App Rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(true)
    return (
        <div className="App">
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <Rating onClick={setRatingValue} value={ratingValue}/>
            <Accordion title={'Menu'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

function PageTitle(props: PageTitleProps) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
