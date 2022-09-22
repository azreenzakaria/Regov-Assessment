import React from 'react';
import Navbar from "../../layouts/frontend/Navbar";

const Dashboard = () => {

    return (

        // <h1>I am Dashboard</h1>

        <div>
      <Navbar />
      <div className="d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="px-3">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </div>

    );

}

export default Dashboard;