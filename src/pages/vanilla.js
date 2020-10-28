import { Link } from "gatsby";
import React from "react";
import Header from "../components/header"

export default function page() {
    return <div style={{color:`teal`}}>
        <Header headerText="It was supposed to be Vanilla" />
        <Link to="/">Home</Link>
        <Header headerText="This is sooo cooool" />
        <p style={{color:`salmon`}}>In vanilla javascript you'd have to write the React fuction to getting an element created:</p>
        <code>1+2=3        </code>

    </div>
        
}