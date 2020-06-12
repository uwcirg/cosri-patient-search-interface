import 'react-app-polyfill/ie11';
import React from "react";
import { render } from 'react-dom';
import App from "./App";

// entry point
render(<App />, document.getElementById("content"));
