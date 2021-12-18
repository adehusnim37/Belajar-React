import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import Navbar from "./components/navbar";
import Home from './pages/home'
import Footer from "./components/footer";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/about" exact component={About}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
