import React from "react";
import { Link } from "react-router-dom";
import '../Styles/LandingPage.css';

export default function LandingPage() {
    return(
        <div className="background">
            <div className="container">
                <h4 className="Text">Click on the poke-ball!</h4>
                <Link to = "/home">
                    <button className="button"></button>
                </Link>
            </div>
        </div>
    )
}