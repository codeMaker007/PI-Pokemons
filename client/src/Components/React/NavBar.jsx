import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
    return(
        <Link to="/home">
            <h1 className='title'>Poke-Main</h1>
        </Link>
    )
}