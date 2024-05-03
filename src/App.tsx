import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UncontrolledRating} from './components/UnControlledRating/UnControlledRating';

type PageTitleProps = {
    title: string
}


function App() {
    console.log('App Rendering')


    return (
        <div className="App">
            <OnOff/>
            <UnControlledAccordion title={'Menu'}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
        </div>
    );
}

function PageTitle(props: PageTitleProps) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
