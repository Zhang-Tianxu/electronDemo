// import React from 'react';
import * as React from 'react'
// import { Routes, Route, BrowserRouter } from "react-router-dom"
// import { HashRouter, Routes, Route, redirect } from 'react-router-dom';
// import { Routes, Route, BrowserRouter, Navigate, redirect, Switch } from "react-router-dom";
import Router from "./router.jsx"
import { Button } from 'antd';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
    return (
        <div className='App'>
        <Router></Router>
        </div>
    );
}

export default App;
