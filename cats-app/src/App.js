import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import CatsMain from "./components/CatsMain";
import Cat from "./components/Cat";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                {/*<CatsMain classname="cats-main" />*/}
                <Switch>
                    <Route path="/cats" component={Home} exact={true}/>
                    <Route path="/cats/:id" component={Cat} exact={true}/>
                    <Route path="/cats-main" component={CatsMain} exact={true}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
