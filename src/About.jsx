import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/download.jpg";

const About = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                              <br /> <br /> <br /> <br /> <br />
                                <h1> To know more about <strong className="brand-name">TheRebelOne</strong></h1>
                                <h2 className="my-3"> contact us by clicking the given button: </h2>
                                <div className="mt-3"><NavLink to="/contact" className="btn-get-started">Click Me</NavLink></div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <br /> <br /> <br /> <br /> <br />
                                <img src={web} className="img-fluid animated" alt="img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};


export default About;