import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Ko() {
    return <div>
        <Header headerText="Knock Out"/>
        <Link to="/">Home</Link>
        <h1 style={{color:`purple`, fontSize: `72px`}}>This is the ko page</h1>
        <p>This is the ko paragraph!!!</p>
        <img src="https://source.unsplash.com/random/300x250" alt="" />
    </div>
}