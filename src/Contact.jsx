import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal, [name]: value,
            };
        });

    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. My mobile number is ${data.phone}. My email address is ${data.email}. My query : ${data.msg}. `)
    };

    return (
        <>
            <div className="my-5 text-center">
                <h1 className="ser">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label font-weight-bold">Name : </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label font-weight-bold">Phone no. :</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your phone number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label font-weight-bold">Email ad. :</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label font-weight-bold">Message :</label>
                                <textarea name="msg" value={data.msg} onChange={InputEvent} placeholder="Enter your query here" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12 ">
                                <button class="button" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Contact;