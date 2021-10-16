import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt= "error" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">To know more about the course, subscribe here. Learn about your favorite topic in detail with us.</p>
                        <NavLink to="" className="button">Subscribe</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Card;