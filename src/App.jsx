import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contacts from "./Contacts";
import About from "./About";
import Navbar from "./Navbar";
import Application from "./Application";
import Clothing from "./Clothing";
import Footwear from "./Footwear";

const App = () => {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Contacts" component={Contacts} />
        <Route exact path="/Navbar" component={Navbar} />
        <Route exact path="/Application" component={Application} />
        <Route exact path="/Clothing" component={Clothing} />
        <Route exact path="/Footwear" component={Footwear} />
        <Redorect to="/"/>
      </Switch>
     
    </>
    
  );
};
export default App;
