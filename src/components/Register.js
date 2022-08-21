import React, { Component } from "react";

export default class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, type, className } = this.props;
        return (
            <div className={`card border-0 shadow ${className}`} style={{ width: "300px", height: "300px" }}>
                <div className="card-body rounded register-card d-flex flex-column justify-content-center align-items-center text-center">
                    <h5 className="card-title">I am a {title}</h5>
                    <p className="card-text">I would like to {type} a research job</p>
                    <a href="!#" className="btn btn-primary">Register Now</a>
                </div>
            </div>
        )
    }
}
