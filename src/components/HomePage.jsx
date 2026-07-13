import React from 'react'

const HomePage = () => {
  return (
    <div
            style={{
                backgroundColor: "#F8F5F2",
                minHeight: "100vh"
            }}
        >
            <div className="container py-5">

                {/* Hero Section */}
                <div
                    className="row align-items-center rounded-4 shadow-sm p-5"
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    <div className="col col-12 col-md-7">

                        <h1
                            className="fw-bold mb-3"
                            style={{ color: "#7A1F1F" }}
                        >
                            Blood Bank Management System
                        </h1>

                        <p
                            className="fs-5 mb-4"
                            style={{ color: "#5C5C5C" }}
                        >
                            A simple and reliable platform for managing blood
                            donors, blood availability, and donation records.
                            Together, we can help save lives.
                        </p>

                    </div>

                    <div className="col col-12 col-md-5 text-center mt-4 mt-md-0">

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                            style={{
                                width: "220px",
                                height: "220px",
                                backgroundColor: "#F5E3E3"
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "100px",
                                    color: "#7A1F1F"
                                }}
                            >
                                ♥
                            </span>
                        </div>

                    </div>
                </div>


                {/* Information Cards */}
                <div className="row mt-5 g-4">

                    <div className="col col-12 col-md-4">
                        <div
                            className="card h-100 border-0 shadow-sm text-center p-4"
                            style={{ backgroundColor: "#FFFFFF" }}
                        >
                            <h3
                                className="fw-bold"
                                style={{ color: "#7A1F1F" }}
                            >
                                Donate Blood
                            </h3>

                            <p style={{ color: "#666666" }}>
                                Become a blood donor and help save the lives
                                of people in need.
                            </p>
                        </div>
                    </div>


                    <div className="col col-12 col-md-4">
                        <div
                            className="card h-100 border-0 shadow-sm text-center p-4"
                            style={{ backgroundColor: "#FFFFFF" }}
                        >
                            <h3
                                className="fw-bold"
                                style={{ color: "#7A1F1F" }}
                            >
                                Find Blood
                            </h3>

                            <p style={{ color: "#666666" }}>
                                Quickly search for available blood groups
                                whenever there is an emergency.
                            </p>
                        </div>
                    </div>


                    <div className="col col-12 col-md-4">
                        <div
                            className="card h-100 border-0 shadow-sm text-center p-4"
                            style={{ backgroundColor: "#FFFFFF" }}
                        >
                            <h3
                                className="fw-bold"
                                style={{ color: "#7A1F1F" }}
                            >
                                Save Lives
                            </h3>

                            <p style={{ color: "#666666" }}>
                                Every blood donation can make a difference
                                and give someone another chance at life.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default HomePage