import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddDonor = () => {

    const [input, changeInput] = useState(
        {
            donor_name: "",
            age: "",
            gender: "",
            blood_group: "",
            phone: "",
            email: "",
            city: "",
            weight_kg: "",
            last_donation_date: ""
        }
    )

    const inputHandler = (event)=>{
        changeInput({...input, [event.target.name]:event.target.value})
    }

    const readValue = ()=>{
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-donor", input).then(
            (response)=>{
                console.log(response.data)
                alert("Donor Added Successfully")
            }
        ).catch(
            (error)=>{
                console.error("Error adding donor");
                alert("Failed to add donor")
            }
        )
    }

  return (
    <div
            style={{
                backgroundColor: "#F8F5F2",
                minHeight: "100vh"
            }}
        >
            <NavBar/>
            <div className="container py-5">

                <div className="row justify-content-center">
                    <div className="col col-12 col-md-10 col-lg-8">

                        <div
                            className="card border-0 shadow-sm rounded-4 p-4 p-md-5"
                            style={{ backgroundColor: "#FFFFFF" }}
                        >

                            <h2
                                className="text-center fw-bold mb-2"
                                style={{ color: "#7A1F1F" }}
                            >
                                Add Donor
                            </h2>

                            <p
                                className="text-center mb-4"
                                style={{ color: "#666666" }}
                            >
                                Enter the donor details to register a new blood donor.
                            </p>


                            <div className="row g-4">

                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        Donor Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='donor_name'
                                        value={input.donor_name}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name='age'
                                        value={input.age}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        Gender
                                    </label>
                                    <select className="form-select" name='gender' value={input.gender} onChange={inputHandler} >
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>


                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        Blood Group
                                    </label>
                                    <select className="form-select" name='blood_group' value={input.blood_group} onChange={inputHandler}>
                                        <option value="">Select</option>
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


                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter 10 digit phone number"
                                        name='phone'
                                        value={input.phone}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="example@gmail.com"
                                        name='email'
                                        value={input.email}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='city'
                                        value={input.city}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col col-12 col-md-6">
                                    <label className="form-label fw-semibold">
                                        Weight (kg)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name='weight_kg'
                                        value={input.weight_kg}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col col-12">
                                    <label className="form-label fw-semibold">
                                        Last Donation Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name='last_donation_date'
                                        value={input.last_donation_date}
                                        onChange={inputHandler}
                                    />
                                </div>


                                <div className="col col-12 text-center mt-4">
                                    <button
                                        className="btn text-white px-5 py-2"
                                        style={{ backgroundColor: "#7A1F1F" }}
                                        onClick={readValue}
                                    >
                                        Add Donor
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
  )
}

export default AddDonor