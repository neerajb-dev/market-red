import React, { Component } from "react";
import Register from "./Register";

export default class RegisterAs extends Component {
    render() {
        return (
            <div className="register-as row justify-content-center align-items-center g-0">
                <Register className="col-sm-6 my-2 mx-5" title="Client" type="post" />
                <Register className="col-sm-6 my-2 mx-5" title="Agency" type="find" />
                <p className="col-12 text-center">I already have an account <a href="!#">Login Now</a></p>
            </div>
        )
    }
}
