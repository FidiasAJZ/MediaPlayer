/* import "./assets/styles/sakura.scss"; */
import React from "react";
import ReactDOM from "react-dom/client";
// Import Bootstrap CSS and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import project styles
import './assets/styles/sakura.scss';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';

import { App } from "./Components/Views/App";
import { Header } from "./Components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Header />
	</React.StrictMode>
);