import React from "react";
import web from "../src/Image/indiaflag.png";
import Common from "./Common";


const About = () => {
  return (
    <>
     <Common name=" Know more about us ! " 
     imgsrc={web} 
     visit="/Contacts"
     btname="Contact Now"
     />
    
    </>
  );
};
export default About;
