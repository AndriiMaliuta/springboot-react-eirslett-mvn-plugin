import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CatList from "./components/CatList";
import CatsMain from "./components/CatsMain";
import Header from "./components/Header";

function App() {
  return (
      // <BrowserRouter>
        <div className="App">
            <Header />
            <CatsMain name="Pukh" />
          {/*<Switch>*/}
          {/*    <Route path="/cats" component={CatList} exact={true} />*/}
          {/*    <Route path="/" component={CatsMain} exact={true} />*/}
          {/*</Switch>*/}
        </div>
      // </BrowserRouter>
  );
}

export default App;
