import {useState, useEffect} from 'react'
import './Nav.css'

function Nav({setIsLoggedIn}) {
    

    return (
        <nav>
            <h1>Art project</h1>
            <span className="nav-link" onClick={() => setIsLoggedIn(false)}>Log out</span>
        </nav>
    )
}

export default Nav