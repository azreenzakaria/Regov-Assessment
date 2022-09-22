import React from "react";
import Navbar from "../../layouts/frontend/Navbar";

const Home = () => {
  return (
    // <div>
    //   <Navbar />
    //   <h1>I am Home Page</h1>
    //   {/* <h1>Sini buat home page</h1>
    //   <h1>I think kene create another interface after login</h1> */}

    // </div>
    <div>
      <Navbar />
      <div className="bg-dark">
        <div className="container-fluid d-flex flex-column">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-md-9 col-lg-6 my-5">
              <div className="text-center error-page">
                <h1 className="mb-0 text-white">REGOV TECHNOLOGIES</h1>
                <h3 className="mb-4 text-white">Automating Financial Services & Beyond</h3>
                <p className="w-sm-80 mx-auto mb-4 text-white">Your Partners in Enterprise Blockchain and Conversational AI Our clients reduce OPEX by up to 75%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
