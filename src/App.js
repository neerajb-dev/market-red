import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Registration from "./components/registrationPage";
import SignUpAgency from "./components/signUpAgency";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/signup-agency" element={<SignUpAgency />} />
      </Routes>
    )
  }
}
