import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow-sm"
            style={{ backgroundColor: "#7A1F1F" }}
        >
            <div className="container">

                <a className="navbar-brand fw-bold fs-4" href="/">
                    Blood Bank
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/add-donor"
                            >
                                Add Donor
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="/view-donor"
                            >
                                View Donor
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default NavBar