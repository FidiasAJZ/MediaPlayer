/* import "./assets/styles/sakura.scss"; */
import React from "react";
import ReactDOM from "react-dom/client";
// Import Bootstrap CSS and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from 'react-bootstrap/Card';

// Import project styles
import './assets/styles/sakura.scss';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';

import { App } from "./Components/Views/App";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { MusicBar } from "./Components/MusicBar";
import { Lyrics } from "./Components/Lyrics";
import { Footer } from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Header />
		<Main />
		<MusicBar />
		<Lyrics />
		<Footer />
	</React.StrictMode>
);