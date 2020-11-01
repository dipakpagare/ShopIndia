import React from "react";
import web from "../src/Image/indiaflag.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
     name="Welcome to" 
     imgsrc={web} 
     visit="/Services"
     btname="Explore"
     />
    </>
  );
};
export default Home;
