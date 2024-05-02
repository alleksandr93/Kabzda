import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

type PageTitleProps = {
    title: string
}

function sum(a: number, b: number) {
    return a + b
}

console.log(sum(52, 45))

function App() {
    console.log("App Rendering")
    return (
        <div className="App">
            <Accordion title={"Меню"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={true}/>
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: PageTitleProps) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
