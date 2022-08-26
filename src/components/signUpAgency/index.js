import React, { Component } from "react";

export default class SignUpAgency extends Component {
    render() {
        return (
            <div className="signup-agency-page">
                <div className="sidebox">
                    <h1 className="brand-logo text-white p-2 text-end">Market Red</h1>
                    <div className="signupForm-container shadow">
                        <div className="side-bubbles-container">
                            <div className="bubble bubble_1">
                                <span>1</span>
                            </div>
                            <div className="bubble bubble_2">
                                <span>2</span>
                            </div>
                            <div className="bubble bubble_3">
                                <span>3</span>
                            </div>
                        </div>
                        <div className="form-container">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
