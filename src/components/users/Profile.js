import React from 'react';
import Navbar from "../../layouts/frontend/Navbar";

const Profile = () => {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    )

    return (

        // <h1>I am profile</h1>

        <div>
            <Navbar />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="my-5">
                            <h3>My Profile</h3>
                            <ColoredLine color="black" />
                        </div>
                        <form className="file-upload">
                            <div className="row mb-5 gx-5">
                                <div className="col-xxl-8 mb-5 mb-xxl-0">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Contact detail</h4>
                                            <div className="col-md-6">
                                                <label className="form-label">First Name:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="First name" value="Azreen" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Last Name:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Last name" value="Zakaria" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Phone Number:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="(+60)123456789" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputEmail4" className="form-label">Email:</label>
                                                <input type="email" className="form-control" id="inputEmail4" value="azreen@gmail.com" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Gender:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Gender" value="Male" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Country:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Religion" value="Malaysia" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default Profile;