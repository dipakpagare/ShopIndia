

import React from "react";
import { NavLink } from "react-router-dom";
import Footer from './Footer';


const Services = () => {
  return (
    <>

      <div className="serviceclass">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            
              <div className="dropdown text-center">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
              <NavLink to='./Clothing' >Clothing</NavLink></button>
                  <button className="dropdown-item" type="button">
                <NavLink to="./Footwear">Footwear</NavLink>
                  </button>
                  <button className="dropdown-item" type="button">
                  <NavLink to="./Application">Apps</NavLink> 
                  </button>
               </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
   
  );
};
export default Services;
