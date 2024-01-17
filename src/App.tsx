import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    console.log("App Rendering")
    return (
        <div className="App">

            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is App component</>
}

function Rating() {
    console.log("Rating redered")
    debugger
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log('Star rendered')
    return <div>Star</div>
}

function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return <h3>Меню</h3>
}

export default App;
