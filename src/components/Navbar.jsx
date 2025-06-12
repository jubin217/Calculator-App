import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-success">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{color:'Yellow'}}><b>Calculator-App</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Addition</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/subtract" style={{color:'white'}}>Subtraction</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/mul" style={{color:'white'}}>Multiplication</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/div" style={{color:'white'}}>Division</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/el" style={{color:'white'}}>Voting Eligibility</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar