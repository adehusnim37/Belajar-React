import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import Navbar from "./components/navbar";
import Home from './pages/home'
import Footer from "./components/footer";
import Menu from "./pages/menu";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
