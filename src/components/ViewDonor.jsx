import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewDonor = () => {

    const [data, changeData] = useState([])

    const fetchDonorData =()=>{
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.error("Error viewing donors")
                alert("Failed to view the donors")
            }
        )
    }

    useEffect(
        ()=>{
            fetchDonorData()
        }
    )

    return (
        <div
            style={{
                backgroundColor: "#F8F5F2",
                minHeight: "100vh"
            }}
        >
            <NavBar/>
            <div className="container py-5">

                <h2
                    className="text-center fw-bold mb-2"
                    style={{ color: "#7A1F1F" }}
                >
                    View All Donors
                </h2>

                <p
                    className="text-center mb-4"
                    style={{ color: "#666666" }}
                >
                    List of registered blood donors
                </p>


                <div className="row mb-4">
                    <div className="col col-12 col-md-4">
                        <label className="form-label fw-semibold">
                            Filter by Blood Group
                        </label>

                        <select className="form-select">
                            <option value="">All Blood Groups</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                </div>


                <div
                    className="card border-0 shadow-sm rounded-4 p-3"
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            backgroundColor: "#7A1F1F",
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Name
                                    </th>

                                    <th
                                        style={{
                                            backgroundColor: "#7A1F1F",
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Age
                                    </th>

                                    <th
                                        style={{
                                            backgroundColor: "#7A1F1F",
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Gender
                                    </th>

                                    <th
                                        style={{
                                            backgroundColor: "#7A1F1F",
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Blood Group
                                    </th>

                                    <th
                                        style={{
                                            backgroundColor: "#7A1F1F",
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Phone
                                    </th>

                                    <th
                                        style={{
                                            backgroundColor: "#7A1F1F",
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        City
                                    </th>

                                    <th
                                        style={{
                                            backgroundColor: "#7A1F1F",
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Weight (kg)
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                {data.map(
                                    (value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value.donor_name}</td>
                                                <td>{value.age}</td>
                                                <td>{value.gender}</td>

                                                <td>
                                                    <span
                                                        className="badge px-3 py-2"
                                                        style={{
                                                            backgroundColor: "#F5E3E3",
                                                            color: "#7A1F1F"
                                                        }}
                                                    >
                                                        {value.blood_group}
                                                    </span>
                                                </td>

                                                <td>{value.phone}</td>
                                                <td>{value.city}</td>
                                                <td>{value.weight_kg}</td>
                                            </tr>
                                        )
                                    }
                                )}

                            </tbody>

                        </table>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewDonor