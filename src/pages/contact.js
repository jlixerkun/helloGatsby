import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function Contact(){
    return <div style={{color:`aqua`}}>
        <Header headerText="Contact Us" />
        <Link to="/">Home</Link>
        <p>Send us a message</p>
        
    </div>
}