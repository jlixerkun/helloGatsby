import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Home() {
  return <div style={{color: `teal`}}>
    <Header headerText="Home" /> 
    <Link to="/" style={{display:`block`}}>Home</Link>
    <Link to="/ko/" style={{display:`block`}}>Knock Out</Link>
    <Link to="/vanilla/" style={{display:`block`}}>Vanilla</Link>
    <Link to="/contact/" style={{display:`block`}}>Contact</Link>
    <p>Hello world!, I'm going down</p> 
    </div>
}
