import React from "react";
import {createRoot} from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

const item={
    name:"sweet",
    price:252,
    color:"yellow",
    place:"andra"
}

 
const AppLayout=()=>(
     <>
       
       <Header/>
       <Body/>
       <Footer/>
    </>)

const root=createRoot(document.getElementById("root"));
root.render(<AppLayout/>);