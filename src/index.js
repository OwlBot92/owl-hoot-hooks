import React from 'react';
import './index.css';
import App from './App';

// ** React 17.0.2
import React from "react";
import reactDom from "react-dom";
import App from "./src/App"
reactDom.render(<App />, document.getElementById("root"));



// ** React 18.1.0
/* import { createRoot } from 'react-dom/client';
import React from "react";
import App from "./src/App"
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App tab="home" />); */
