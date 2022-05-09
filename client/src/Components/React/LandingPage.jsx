import React from "react";
import { Link } from "react-router-dom";
import '../Styles/LandingPage.css';

export default function LandingPage() {
    return(
        <div className="background">
            <div className="container">
                <h4 className="Text">Welcome to the poke-experience</h4>
                <Link to = "/home">
                    <button className="button"></button>
                </Link>
            </div>
        </div>
    )
}